import Image from "next/image";
import client from "../../sanity";
import { useNextSanityImage } from "next-sanity-image";
import styles from "./Item.module.scss";

const Item = ({ image, category, title }) => {
	const imageProps = useNextSanityImage(client, image);

	return (
		<div className={styles.item}>
			<Image
				src={imageProps.src}
				loader={imageProps.loader}
				width={200}
				height={200}
			/>
			<h3>{category}</h3>
			<h4>{title}</h4>
		</div>
	);
};

export default Item;
