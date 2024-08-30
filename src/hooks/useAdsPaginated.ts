import { useQuery } from "@tanstack/react-query";
export type AdsPageParams = {
  ad_type?: number;
  page: number;
}
 const useAdsPaginated = ( ) => {
	let totalItems :number = 0;
	const { data } = useQuery({
		queryKey: ["Ads"],
		queryFn: async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts'
			const res:Response = await fetch(
				url
			);
			return res.json();
		},
		select : (data) =>{
			totalItems = data.length;
			return data;
		}
	});
	return { data ,totalItems  };
};
export default useAdsPaginated;
  