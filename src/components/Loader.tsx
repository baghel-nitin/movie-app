import { memo } from 'react'

const Loader = () => {
  return (
    <div className='flex h-full w-full fixed items-center top-0'>
      <div className='flex my-0 mx-auto'>
        <div
          className='h-12 w-12 animate-spin rounded-full
border-8 border-solid border-purple-500 border-t-transparent'
        ></div>
      </div>
    </div>
  )
}

export default memo(Loader)
