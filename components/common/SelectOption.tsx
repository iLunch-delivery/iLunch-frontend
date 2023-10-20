import type { SelectOptionProps } from '@/config/interfaces'

function SelectOption({ imageURL, name, action }: SelectOptionProps) {
  return (
    <div
      className='w-32 flex flex-col justify-center items-center cursor-pointer hover:scale-110'
      onClick={() => {
        action()
      }}
    >
      <img
        className='block h-16'
        src={imageURL}
        alt={`Order receive option: ${name}`}
      />
      <p className='text-sm text-center font-medium'>{name}</p>
    </div>
  )
}

export default SelectOption
