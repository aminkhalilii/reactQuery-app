import { useQuery } from "@tanstack/react-query";

 const useAds = ( adsType:string ) => {
	const { data } = useQuery({
		queryKey: ["Ads",adsType],
		queryFn: async () => {
      console.log(queryKey);
      
      let url = 'http://localhost:5000/ads/advertises/'
      if(adsType != "all")
        url+='?ad_type=' + adsType;

			const res:Response = await fetch(
				url
			);
			return res.json();
		},
	});
	return { data   };
};
export default useAds;
