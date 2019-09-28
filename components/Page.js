import styled from "styled-components";


const TopItem = styled.div`
margin: 0;

`


const Page = ({ children }) => (
  <TopItem>
    <style jsx global>{`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap');

      body { 
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
      }

      * {
        background-color: #9D00FF;
        color: white;
      }
      h1 {
    margin-top: 6rem;
    letter-spacing: -4px;
    margin-bottom: 0;
    font-size: 6rem;
}

p {
    margin-top: 0.5rem;
    font-size: 2rem;
    line-height: 1.5;
}

h5 {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.5
}

button {
    padding: 1rem;
    font-size: 1.8rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    border: 4px solid white;
    border-radius: 6px;
    background-color: white;
    color: #9D00FF;
}
    `}</style>


    <div>{children}</div>
  </TopItem>
)

export default Page;
