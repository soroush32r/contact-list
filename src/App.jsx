import { useState } from 'react';
import { Table, NewUser, Search } from './components'


function App() {
  const [ usersData,setUsersData ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('')

  const newUserAdd = ( name, phone, email ) => {
    const newUser = {
      'id': usersData.length + 1,
      'name':name,
      'email': email,
      'phone': phone
    }
    setUsersData([newUser , ...usersData]);
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
