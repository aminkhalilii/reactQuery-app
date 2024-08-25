import AdsList from './AdsList'
import  useAds  from '../hooks/useAds'
import { useState } from 'react';

const AdContainer = () => {
  const [filter,setFilter] = useState("all")
  const { data } = useAds(filter);
  if(!data) return <h1>Loading</h1>
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-around",marginBottom:"10px",width:200}}>
      <span onClick={()=>setFilter("all")}>All</span>
      <span onClick={()=>setFilter("buy")}>Buy</span>
      <span onClick={()=>setFilter("sell")}>Sell</span>
    </div>
    <AdsList adsList={data} />
    </>
  )
}

export default AdContainer