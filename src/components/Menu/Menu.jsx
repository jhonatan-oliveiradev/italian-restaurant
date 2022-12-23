import Item from "./Item";
import styles from "./Menu.module.scss";

const Menu = ({ menu }) => {
	const renderItems = menu.map((item) => (
		<Item
			key={item._id}
			image={item.image}
			category={item.category}
			title={item.title}
		/>
	));

	return (
		<section className={styles["cardapio-wrapper"]}>
			<div className={styles.cardapio}>
				<h2 className="gold">No Cardápio</h2>
				<div className={styles.items}>{renderItems}</div>
			</div>
		</section>
	);
};

export default Menu;
