import { useEffect, useState } from "react"
import clsx from 'clsx'


export const Input = ({ addNewUser }) => {
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
      <input className={clsx('flex-grow', 'border', 'rounded-md', 'px-1', 'mr-1',
        {'border-red-500' : !isNameFilled && isClicked},
      )} placeholder="Name" value={name} onChange={handleNameChange}/>
      
      <input className={clsx('flex-grow', 'border', 'rounded-md', 'px-1', 'mr-1',
        {'border-red-500' : !isPhoneFilled && isClicked},
      )} placeholder="Phone" value={phone} onChange={handlePhoneChange}/>

      <input className={clsx('flex-grow', 'border', 'rounded-md', 'px-1', 'mr-1',
        {'border-red-500' : !isEmailFilled && isClicked},
      )} placeholder="Email" value={email} onChange={handleEmailChange}/>
      <button className="py-2 px-4 text-center bg-blue-500 rounded-md text-white" onClick={handleUserAdd}>+Add</button>
    </div>
  )
}