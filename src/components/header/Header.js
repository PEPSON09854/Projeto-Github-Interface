import React, { useState } from 'react'
import useGithub from '../../hooks/Hooks'
import * as S from './StyledHeaders'


const Header = () => {

    const {getUser} = useGithub()
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () =>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch)
    }

  return (
    <div>
      <header>
        <S.Wrapper>
            <input type= 'text' placeholder='Digite user name para pesquisar...' onChange={(event)=> setUsernameForSearch(event.target.value)}/>
            <button type='submit' onClick={submitGetUser}><span>Buscar</span></button>
        </S.Wrapper>

      </header>
    </div>
  )
}

export default Header
