import { ChangeEvent, FC, memo, useState } from 'react'

export interface SearchProps {
  title: string
  searchValue: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<SearchProps> = ({ title, searchValue, handleSearch }) => {
  const [toggleInput, setToggleInput] = useState(false)

  return (
    <div className=' flex flex-wrap justify-between gap-2 md:mx-8 y9:gap-5 fixed-header'>
      <div className='fixed-header flex flex-wrap justify-between gap-2 md:mx-8'>
        {!toggleInput && (
          <div className='flex w-full items-center justify-between gap-5 px-[2rem]'>
            <h2 className='flex text-2xl items-center font-normal gap-4 px-1.5 font-display text-[22px] text-white'>
              <img
                src={`https://test.create.diagnal.com/images/Back.png`}
                alt=''
                className={`h-[15px] w-[15px] y9:h-[20px] y9:w-[20px]`}
              />
              {title}
            </h2>
            <img
              onClick={() => setToggleInput(!toggleInput)}
              src={`https://test.create.diagnal.com/images/search.png`}
              alt=''
              className={`h-[18px] w-[18px] y9:h-[23px] y9:w-[23px]`}
            />
          </div>
        )}

        {toggleInput && (
          <div className='flex w-full items-center justify-between gap-5 px-[2rem]'>
            <img
              onClick={() => setToggleInput(!toggleInput)}
              src={`https://test.create.diagnal.com/images/Back.png`}
              alt=''
              className={`h-[15px] w-[15px] y9:h-[20px] y9:w-[20px]`}
            />
            <input
              type='search'
              className='block h-[40px]
             w-full rounded-full
             border-gray-300 px-4
             shadow-sm ease-in-out
             focus:border-indigo-300 focus:ring
             focus:ring-indigo-200 focus:ring-opacity-50'
              placeholder='Search'
              value={searchValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
              aria-label='Search'
              aria-describedby='button-addon2'
            />
          </div>
        )}
      </div>
      {!toggleInput && (
        <div className='flex w-full items-center justify-between gap-5 px-[2rem]'>
          <h2 className='flex text-2xl items-center font-normal gap-4 px-1.5 font-display text-[22px] text-white'>
            <img
              src={`https://test.create.diagnal.com/images/Back.png`}
              alt=''
              className={`h-[15px] w-[15px] y9:h-[20px] y9:w-[20px]`}
            />
            {title}
          </h2>
          <img
            onClick={() => setToggleInput(!toggleInput)}
            src={`https://test.create.diagnal.com/images/search.png`}
            alt=''
            className={`h-[18px] w-[18px] y9:h-[23px] y9:w-[23px]`}
          />
        </div>
      )}
      {toggleInput && (
        <div className='flex w-full items-center justify-between gap-5 px-[2rem]'>
          <img
            onClick={() => setToggleInput(!toggleInput)}
            src={`https://test.create.diagnal.com/images/Back.png`}
            alt=''
            className={`h-[15px] w-[15px] y9:h-[20px] y9:w-[20px]`}
          />
          <input
            type='search'
            className='block h-[40px]
             w-full rounded-full
             border-gray-300 px-4
             shadow-sm ease-in-out
             focus:border-indigo-300 focus:ring
             focus:ring-indigo-200 focus:ring-opacity-50'
            placeholder='Search'
            value={searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
            aria-label='Search'
            aria-describedby='button-addon2'
          />
        </div>
      )}
    </div>
  )
}

export default memo(SearchBar)
