import { Advertise } from '../models'
import AdsCard from './AdsCard'

const AdsList = ({adsList}:{adsList:Advertise[]}) => {
  return (
    <div>
      {adsList?.map(ad =>(
        <AdsCard key={ad.id} ads={ad} />
      ))}
    </div>
  )
}

export default AdsList