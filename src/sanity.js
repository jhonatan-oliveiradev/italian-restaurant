import { createClient } from "next-sanity";

const client = createClient({
	projectId: "12m3tryv",
	dataset: "production",
	apiVersion: "2022-12-01",
	useCdn: true,
});

export default client;
