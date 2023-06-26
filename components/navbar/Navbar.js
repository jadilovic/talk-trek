import Image from 'next/image';
import Link from 'next/link';
import talkTrekIcon from '../../public/images/icon-language-skill-96.png';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navigation}>
				<Link href="/" className={styles.logo}>
					<Image
						width={52}
						height={52}
						src={talkTrekIcon}
						alt="language-skill"
					/>
					<h1>TalkTrek</h1>
				</Link>
				<ul className={styles.links}>
					<li className={styles.link}>
						<Link href="/english">English</Link>
					</li>
					<li className={styles.link}>Pricing</li>
					<li className={styles.link}>Resources</li>
				</ul>
			</div>
			<ul className={styles.profile}>
				<li className={styles.signin}>Sign In</li>
				<li className={styles.signup}>Sign Up</li>
			</ul>
		</nav>
	);
};
export default Navbar;
