import '../styles/table.css'

export const Table = ( {usersData, searchTerm} ) => {
  
  return (
    <table className="flex-grow w-full  border-collapse">
      <thead>
        <tr className="text-left border-y-2">
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usersData.length > 0 ? usersData
        .filter(({name}) => name.toLowerCase().includes(searchTerm))
        .map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
          </tr>
        )) : (<tr><td colSpan={3}>No User</td></tr>)}
      </tbody>
    </table>
  )
}