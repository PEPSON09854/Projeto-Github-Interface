import styled from "styled-components";

export const Wrapper = styled.div`
 display: flex;
 justify-content: end;
 

 input{
    height: 30px;
    width:100%;
    border-radius: 6pt;
    border: 1px solid #0cc;
    margin: 0 6px;
    padding: 4px;
    
 }

 button{
    font-weight: bold;
    border: 1px solid #000;
    border-radius:10px;
    width: 100px;
    cursor: pointer;
    background: #000111;
    font-size: 15px;
    color: orange;

    &:hover{
        background: #32a899;
        color: #fff;
        text-shadow: 1px 1px #000;
        transition: .4s;
        box-shadow: 3px 2px 3px 2px  #000;
    }
    
 }
`