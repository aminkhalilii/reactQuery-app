import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const client = new QueryClient({
		defaultOptions:{
			queries:{
				staleTime:10000,
				gcTime:5000,
				// refetchOnWindowFocus:false,
				// refetchOnMount:false, when paint component
				// refetchOnReconnect:false,
				// refetchInterval:5000
				// retry:false
				// retryDelay:5000
				// cacheTime:5000
				// keepPreviousData:true
				// suspense:true
				// enabled:true
				// notifyOnChangeProps:["data","error","isLoading","isFetching","isError","isSuccess","isIdle","status","isStale","isRefetching","isPlaceholderData","isPreviousData","queryKey","queryHash","queryFn","meta"]

		}
		}
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</StrictMode>  
);
