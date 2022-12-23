import Item from "./Item";
import styles from "./MenuList.module.scss";

const MenuList = ({ recipe }) => {
	const menuRender = recipe.map((item) => (
		<Item
			key={item._id}
			recipe={item.recipe}
			ingredients={item.ingredients}
			price={item.price}
		/>
	));

	return (
		<section className={styles["menu-wrapper"]} id="menu">
			<div className={styles.menu}>
				<h2 className="gold">MENU</h2>
				<ul className={styles.list}>{menuRender}</ul>
			</div>
		</section>
	);
};

export default MenuList;
