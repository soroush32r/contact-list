import { useState } from "react"
import Input from "./Input"

export const Search = ( {usersData, handleSearchChange} ) => {
  const [ term, setTerm ] = useState('')
  
  const handleSearch = ({target}) => {
    setTerm(target.value)
    handleSearchChange(target.value)
  }
  return( 
    <Input placeholder='Search' className="py-2" handleChange={handleSearch} value={term}/>
  )
}