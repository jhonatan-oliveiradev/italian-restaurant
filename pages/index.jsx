import Benefits from "../src/components/Benefits/Benefits";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header";
import ImageText from "../src/components/ImageText/ImageText";
import Menu from "../src/components/Menu/Menu";
import MenuList from "../src/components/MenuList/MenuList";
import Navbar from "../src/components/Navbar/Navbar";
import Reviews from "../src/components/Reviews/Reviews";
import client from "../src/sanity";

export default function Home({
	header,
	benefits,
	about,
	menu,
	reviews,
	location,
	recipe,
	footer,
}) {
	return (
		<>
			<Navbar />
			<Header header={header} />
			<main>
				<Benefits benefits={benefits} />
				<ImageText data={about} id="about" />
				<Menu menu={menu} />
				<Reviews reviews={reviews} />
				<ImageText data={location} id="location" />
				<MenuList recipe={recipe} />
				<Footer footer={footer} />
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const header = await client.fetch(`*[_type == "header"][0]`);
	const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);
	const about = await client.fetch(`*[_type == "about"][0]`);
	const menu = await client.fetch(`*[_type == "menu"][0..3]`);
	const reviews = await client.fetch(`*[_type == "reviews"][0..3]`);
	const location = await client.fetch(`*[_type == "location"][0]`);
	const recipe = await client.fetch(`*[_type == "recipe"][0..6]`);
	const footer = await client.fetch(`*[_type == "footer"][0]`);

	return {
		props: {
			header,
			benefits,
			about,
			menu,
			reviews,
			location,
			recipe,
			footer,
		},
	};
};
