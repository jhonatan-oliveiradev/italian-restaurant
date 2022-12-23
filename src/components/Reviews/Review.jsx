import styles from "./Review.module.scss";
import client from "../../sanity";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const Review = ({ name, review, image }) => {
	const imageProps = useNextSanityImage(client, image);

	return (
		<div className={styles.review}>
			<div className={styles.avatar}>
				<Image
					src={imageProps.src}
					loader={imageProps.loader}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<span>{name}</span>
			<p>"{review}"</p>
		</div>
	);
};

export default Review;
