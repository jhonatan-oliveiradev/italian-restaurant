import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const [isNavbarShown, setIsNavbarShown] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const setNavbarHnadler = () => {
			if (window.scrollY >= 600) {
				setIsNavbarShown(true);
			} else {
				setIsNavbarShown(false);
			}
		};

		document.addEventListener("scroll", setNavbarHnadler);

		return () => {
			document.removeEventListener("scroll", setNavbarHnadler);
		};
	}, []);

	const toggleMenuHandler = () => setIsMobile(!isMobile);

	return (
		<section
			className={`${styles["navbar-wrapper"]} ${
				isNavbarShown && styles.active
			}`}
		>
			<div className={styles.navbar}>
				<a href="#">
					<Image src="/logo.png" alt="logotipo" width={180} height={38} />
				</a>
				<nav className={styles.links}>
					<NavLinks toggleMenu={null} />
				</nav>
				<GiHamburgerMenu className={styles.icon} onClick={toggleMenuHandler} />
				<nav className={`${styles.toggle} ${isMobile && styles.active}`}>
					<NavLinks toggleMenu={toggleMenuHandler} />
				</nav>
				<div className={`${styles.background} ${isMobile && styles.active}`} />
			</div>
		</section>
	);
};

export default Navbar;
