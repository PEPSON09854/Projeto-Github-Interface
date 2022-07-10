import styled from 'styled-components'

export const Warapper = styled.div`
 display: flex;
 flex-wrap: wrap;
  
`
export const WarapperInfoUser = styled.div`
 background-color: #000111;
 display: block;
 justify-content: center;
 align-item: center;
 margin-top: 45px;
 border: 1px solid #32a899;
 border-radius: 18px;
 box-shadow: 2px 2px 0px 0px #000;
 margin-left: 130px;
 position: relative;
 height: 260px;
 width: 700px;

 h1{
   margin-top: 15px;
   text-align: center;
   font-size:32px;
   font-weight: bold;
   color: #fff;
 }

 h3{
   left: 40px;
    margin-top: 20px;
    color: orange;
    font-size:18px;
    font-weight: bold;
    text-shadow: 1px 1px  #000;
 }

 h4{
    font-size:16px;
    font-weight: bold;
    color: #fff;
 }

 @media(max-width: 800px){
  right: 55px;
 }
`

export const WarapperStatusCount = styled.div` 
margin-top: 10px;
text-align: center;
display: flex;
justify-content: space-around;

span{
   color: yellow;
}
 
`

export const WarapperUserGeneric = styled.div`
height: 5px;
display:block;
margin-left: 10px;

h3{
   position: relative;
   top: -15px;
}

span{
   position: relative;
   top: -53px;
   left: 150px;
   color: #FFF
   
}

a{
   position: relative;
   top: -53px;
   left: 145px;
    margin: 7px;
    text-decoration: none;
    color: blue;
    display: flex;
    max-width:350px;
    
    
    &:hover{
       color: #3315d0;
       transition: .6s;
    }
 }
`
export const WarapperImage = styled.img`
 border-radius: 50%;
 width: 250px;
 margin: 10px;
 margin-top: 50px;
 box-shadow: 2px 1px 1px 2px #000;
 
 @media(max-width: 800px){
   position: relative;
   left: 170px;
   
  }
`