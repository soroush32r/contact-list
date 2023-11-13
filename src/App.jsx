import { useState } from 'react';
import { Table, NewUser, Search } from './components'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [ users, { set }] = useLocalStorage('users')
  const [ usersData,setUsersData ] = useState(users || []);
  const [ searchTerm, setSearchTerm ] = useState('')

  const newUserAdd = ( name, phone, email ) => {
    const newUser = {
      'id': usersData.length + 1,
      'name':name,
      'email': email,
      'phone': phone
    }
    const allUser = [newUser , ...usersData] 
    setUsersData(allUser);
    set('users' , allUser)
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-5/6 flex flex-col max-h-screen">
        <Search usersData={usersData} handleSearchChange = {handleSearchChange}/>
        <NewUser addNewUser={newUserAdd}/>
        <Table usersData={usersData} searchTerm={searchTerm}/>
      </div>
    </div>
  )
}

export default App
