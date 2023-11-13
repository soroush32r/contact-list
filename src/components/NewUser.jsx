import { useEffect, useState } from "react"
import Input from './Input'
import clsx from "clsx";


export const NewUser = ({ addNewUser }) => {
  const [ name,setName ] = useState('');
  const [ email,setEmail ] = useState('');
  const [ phone,setPhone ] = useState('');

  const [ isNameFilled,setIsNameFilled ] = useState(false)
  const [ isEmailFilled,setIsEmailFilled ] = useState(false)
  const [ isPhoneFilled,setIsPhoneFilled ] = useState(false)
  const [ isClicked,setIsClicked ] = useState(false)

  useEffect(() => {
    name.trim(' ') !== '' ? setIsNameFilled(true) : setIsNameFilled(false)    
    phone.trim(' ') !== '' ? setIsPhoneFilled(true) : setIsPhoneFilled(false)    
    email.trim(' ') !== '' ? setIsEmailFilled(true) : setIsEmailFilled(false)

  }, [phone,email,name])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleUserAdd = () => {
    setIsClicked(true)
    console.log(name, email, phone)

    if (name.trim() && email.trim() && phone.trim()) {
      addNewUser(name, phone, email)
      
      setName('')
      setEmail('')
      setPhone('')
      setIsClicked(false)
    }
  }

  return (
    <div className="flex justify-start my-2 w-full">
      <Input borderSet={isNameFilled} isClicked={isClicked} placeholder="Name" value={name} handleChange={handleNameChange}/>
      {console.log(name === '' , isClicked)}
      <Input borderSet={isPhoneFilled} isClicked={isClicked} placeholder="Phone" value={phone} handleChange={handlePhoneChange}/>
      <Input borderSet={isEmailFilled} isClicked={isClicked} placeholder="Email" value={email} handleChange={handleEmailChange}/>
      <button className="px-4 text-center bg-blue-500 rounded-md text-white" onClick={handleUserAdd}>+Add</button>
    </div>
  )
}