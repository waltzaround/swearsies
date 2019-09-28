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
    `}</style>


    <div>{children}</div>
  </TopItem>
)

export default Page;
