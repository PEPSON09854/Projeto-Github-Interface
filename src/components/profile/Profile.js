import React from 'react'
import useGithub from '../../hooks/Hooks'
import * as S from './StyledProfile'

const Profile = ()=> {

    const {githubState} = useGithub()

  return (
    <S.Warapper>
        <S.WarapperImage src={githubState.user.avatar} alt='Avatar of user'/>
        <S.WarapperInfoUser>
            <div>

                <h1>{githubState.user.name}</h1>

                <S.WarapperUserGeneric>
                    <h3>UserName:</h3>
                    <a href={githubState.user.html_url} target='_blank' rel='noreferrer'>{githubState.user.login}</a>
                </S.WarapperUserGeneric>

                <S.WarapperUserGeneric>
                    <h3>Company:</h3>
                    <span>{githubState.user.company}</span>
                </S.WarapperUserGeneric>

                <S.WarapperUserGeneric>
                    <h3>Location:</h3>
                    <span>{githubState.user.location}</span>
                </S.WarapperUserGeneric>

                <S.WarapperUserGeneric>
                    <h3>Blog:</h3>
                    <a href={githubState.user.blog} target='_blank' rel='noreferrer'>{githubState.user.blog}</a> 
                </S.WarapperUserGeneric>
            </div>

            <S.WarapperStatusCount>
                <div>
                  <h4>Followers</h4>
                  <span>{githubState.user.followers}</span>
                </div>
                <div>
                  <h4>Gists</h4>
                  <span>{githubState.user.public_gists}</span>
                </div>
                <div>
                  <h4>Repos</h4>
                  <span>{githubState.user.public_repos}</span>
                </div>
                <div>
                  <h4>Followings</h4>
                  <span>{githubState.user.following}</span>
                </div>
            </S.WarapperStatusCount>
        </S.WarapperInfoUser>
    </S.Warapper>
  )
}

export default Profile
