import type { SelectOptionProps } from '@/config/interfaces'

function SelectOption({ imageURL, name, selected, action }: SelectOptionProps) {
  return (
    <div
      className={`w-32 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ${
        selected ? 'scale-110 ' : 'opacity-50 hover:opacity-100'
      } `}
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
