import AdsList from "./AdsList";
import useAds from "../hooks/useAds";
import { useState } from "react";

const AdContainer = () => {
	const [filter, setFilter] = useState("all");
	const { data } = useAds(filter);
	if (!data) return <h1>Loading</h1>;
	return (
		<>
			<div className="flex justify-center gap-4 text-red-400">
				<div className="" onClick={() => setFilter("all")}>
					All
				</div>
				<div onClick={() => setFilter("buy")}>Buy</div>
				<div onClick={() => setFilter("sell")}>Sell</div>
			</div>
			<AdsList adsList={data} />
		</>
	);
};

export default AdContainer;
