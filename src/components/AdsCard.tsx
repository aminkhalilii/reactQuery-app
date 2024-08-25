import { Advertise } from '../models';

const AdsCard = ({ ads }: { ads: Advertise }) => {
  return (
    <div>
      <h1>{ads.title}</h1>
    </div>
  )
 
}

export default AdsCard