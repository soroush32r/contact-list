import { useState } from 'react';
import { Table, NewUser } from './components'


function App() {
  const [ usersData,setUsersData ] = useState([]);

  const newUserAdd = ( name, phone, email ) => {
    const newUser = {
      'id': usersData.length + 1,
      'name':name,
      'email': email,
      'phone': phone
    }
    setUsersData([newUser , ...usersData]);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-5/6 flex flex-col max-h-screen">
        <NewUser addNewUser={newUserAdd}/>
        <Table usersData={usersData}/>
      </div>
    </div>
  )
}

export default App
