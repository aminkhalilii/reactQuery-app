import { useQuery } from '@tanstack/react-query'

const AdvertisersList = () => {
  interface Post {
    id: number;
    title: string;
    // Add other properties as needed
  }


  const { data,isPending} = useQuery({
    queryKey: ['posts'],
    queryFn: async ()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      return res.json()
    }
  })
  {if(isPending){
    return <h1>Loading</h1>
  }}
  return (
    <>
      <ul>
        {data?.map((post:Post)=>{
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </>
  )
}

export default AdvertisersList