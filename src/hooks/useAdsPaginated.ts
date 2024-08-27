import { useQuery } from "@tanstack/react-query";
export type AdsPageParams = {
  ad_type?: number;
  page: number;
}
 const useAdsPaginated = ( pageParams: AdsPageParams ) => {
	const { data } = useQuery({
		queryKey: ["Ads",...pageParams],
		queryFn: async () => {
      
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
export default useAdsPaginated;
 