import React from 'react'
import Layout from './components/layout/Layout'
import NoSearch from './components/no-search/Search'
import Profile from './components/profile/Profile'
import Repositories from './components/repositories/Repositories'
import useGithub from './hooks/Hooks'

const App = ()=> {
  const {githubState} = useGithub()
  
  return (
   <Layout>
    {githubState.hasUser ?(
    <>
      {githubState.loading ? (
      <p>Loading</p>
      ) : (
        <>
          <Profile />
          <Repositories />
        </>
        )}
    </>
    ):( 
      <NoSearch />
    )}
          
   </Layout> 
  )
}

export default App


