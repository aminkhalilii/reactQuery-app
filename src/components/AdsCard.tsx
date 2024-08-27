import { Advertise } from '../models';

const AdsCard = ({ ads }: { ads: Advertise }) => {
  return (
    <div className='flex w-[20rem] h-[16rembg-red-100 flex-col gap-4 border border-gray-600 p-8 rounded-md'>
      <h1 className='text-left'>{ads.title}</h1>
      <img src={ads.image} className='w-full h-64 object-cover' />
      <p className='text-left'>{ads.price}</p>
    </div>
  )
 
}

export default AdsCard