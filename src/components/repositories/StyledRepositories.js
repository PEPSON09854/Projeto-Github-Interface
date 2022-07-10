import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'


export const WarapperTabs = styled(Tabs)`
 font-size: 16px;
 width: 100%;
 margin-top: 50px;
`
export const WarapperTabList = styled(TabList)`
 list-style-type: none;
 padding: 4px;
 display: flex;
 margin: 0;
`
WarapperTabList.tabsRoles = 'TabList'

export const WarapperTab = styled(Tab)`
 border-radius: 2px;
 padding: 8px;
 user-select: none;
 cursor: pointer;
 font-weight: bold;
 box-shadow: 0px -3px 0px 0px #32a899;
 margin-left: 1px;
 
 
 &:focus{
    outline: none;    
 }

 &.is-selected{
    background: #000111;
    box-shadow: -1px -3px 0px 0px #32a899;
    color: orange;
    text-shadow: 1px 1px #000;
    
   
 }

 &:hover{
    color: orange;
    text-shadow: 1px 1px black;
    transition: .8s;
    
 }
`

WarapperTabList.tabsRoles = 'Tab'

export const WarapperTabPanel = styled(TabPanel)`
 display: none;
 padding: 8px;
 mardin-top: -5px;
 margin-top: -5px;
 margin-left: 4px;
 box-shadow: 2px 3px 1px  #000;
 font-weight: bold;
 border: 1px solid #32a899;
 

 &.is-selected{
    background: #000111;
    box-shadow: 1px 2px 0px 1px #000;
    display: block;
    color: #fff;
 }
`
WarapperTabList.tabsRoles = 'TabPanel' 

export const WarapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`