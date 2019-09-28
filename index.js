require('dotenv').config()
const { AuthClient, ApiClient } = require("bankengine-js-sdk")
const path = require('path')
const express = require("express")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
// app.use('/site',express.static(path.join(__dirname,'public/index.html')))
// app.use('/',express.static(path.join(__dirname,'public/index.html')))
app.use(express.static(path.join(__dirname,'public')))
// Bad practice to do this
let access_token
const clientId = process.env.clientId

const clientSecret = process.env.clientSecret

const redirectUri = process.env.redirectUri

const scopes = ["userinfo", "accounts", "balance", "transactions", "payments"]
const authClient = new AuthClient(clientId, clientSecret, redirectUri)

const apiClient = new ApiClient('https://api.bankengine.nz/')

// initial log in -- OAuth dance here
app.get('/auth', (req, res) => {
    // Generate auth url, nonce is not used since we use authorization_code grant
    const authURL = authClient.generateAuthorizationURL(scopes, "nonce", "state")
    res.redirect(authURL) 
})


app.get('/callback', async (req, res) => {
    const code = req.query.code
    const tokens = await authClient.exchangeToken(code)
    access_token = tokens.access_token

    // res.cookie('access_token',accessToken)
    res.redirect(`http://localhost:5000/site`)
})


app.get('/app', async (req, res) => {
    res.redirect('localhost:3000')
})

app.post('/clearCookie', (req, res) => {
    req.clearCookie
    res.clearCookie('access_token')
    res.send('Done')
})

app.get('/accounts', async (req, res) => {
    let result
    try {
        result = await apiClient.getAccounts(access_token)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
    res.send(result)
})

app.get('/account/:id', async (req, res) => {
    const result = await apiClient.getAccount(access_token, req.params.id)
    res.send(result)
})
app.post('/deductSwearCost/', async (req, res) => {
    const accountList = await apiClient.getAccounts(access_token)
    const { data } = accountList
    const senderAccount = data[0]
    const { accountNumber } = senderAccount
    try {
        const { receiverAccount } = req.body
        const paymentRequest = {
            fromAccount: '99-2630-8228880-00',
            toAccount: '99-1526-1969322-00',
            amount: 5.00,
            from: {
                particulars: 'Swear-jar',
                code: '',
                reference: 'Again'
            },
            to: {
                particulars: 'Swear-jar',
                code: '',
                reference: ''
            }
        }
        result = await apiClient.postPayment(access_token, paymentRequest)
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }

    res.send(result)
})

app.get('/site', (req, res)=> {
    res.sendFile(`${__dirname}/public/confirm.html`)
})

app.listen(5000, () => console.log("BankEngine server listening on port 5000..."))