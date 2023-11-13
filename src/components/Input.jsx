import clsx from 'clsx'

const Input = ({ borderSet, isClicked, placeholder, value, handleChange, className }) => {
  return (
    <div className='flex flex-col justify-start w-full'>
        <input className={clsx('flex-grow', 'border', 'rounded-md', 'py-2', 'px-1', 'mr-1',
        {'border-red-500' : !borderSet && isClicked},
        className
      )} placeholder={placeholder} value={value} onChange={handleChange}/>

    <p className={clsx('text-red-400',
                {'block': isClicked && name === ''},
                {'hidden': !isClicked || (isClicked && name !== '')}          
    )}>Please Enter {placeholder}</p>

    </div>
  )
}

export default Input