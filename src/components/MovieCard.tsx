import { FC, memo} from 'react'

export interface Props {
  item: MovieProps
}

export interface MovieProps {
  name: string
  'poster-image': string
}

const MovieCard: FC<Props> = ({ item }) => {
  let missingImagePlaceholder = 'placeholder_for_missing_posters.png'
  let { name, 'poster-image': posterImage } = item

  return (
    <div className='mb-8 flex w-[140px] flex-col y9:w-[182px]'>
      <div className='group relative text-textDark'>
        <img
          src={
            posterImage.includes('missing')
              ? `https://test.create.diagnal.com/images/${missingImagePlaceholder}`
              : `https://test.create.diagnal.com/images/${posterImage}`
          }
          alt='noImage'
          className={`h-[210px] w-[140px] y9:h-[273px] y9:w-[182px] mr-0`}
        />
      </div>
      <div className='flex w-[140px] justify-start text-left text-[17px] y9:w-[180px] '>
        <p className='mt-2 font-display text-white'>{name}</p>
      </div>
    </div>
  )
}

export default memo(MovieCard)
