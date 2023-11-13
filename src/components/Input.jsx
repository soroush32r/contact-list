import clsx from 'clsx'

const Input = ({ borderSet, isClicked, placeholder, value, handleChange, className }) => {
  return (
    <input className={clsx('flex-grow', 'border', 'rounded-md', 'px-1', 'mr-1',
    {'border-red-500' : !borderSet && isClicked},
    className
  )} placeholder={placeholder} value={value} onChange={handleChange}/>
  )
}

export default Input