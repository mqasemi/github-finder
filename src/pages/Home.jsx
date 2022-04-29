import React from 'react'
import UsersResults from '../components/users/UsersResults'
import UserSearch from '../components/users/UserSearch'
import Alert from '../components/layout/Alert'
function Home() {
  return (
    <div >
      <Alert/>
       <UserSearch/>
            <UsersResults/>
    </div>
  )
}

export default Home