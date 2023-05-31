import styles from './Footer.module.css';
import Image from 'next/image';
import facebookIcon from '../../public/images/icon-facebook.svg';
import twitterIcon from '../../public/images/icon-twitter.svg';
import pinterestIcon from '../../public/images/icon-pinterest.svg';
import instagramIcon from '../../public/images/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<section className={styles.logo}>
					<h4 className={styles.logoTitle}>TalkTrek</h4>
				</section>
				<ul className={styles.list}>
					<li className={styles.footerTitle}>Features</li>
					<li className={styles.footerLink}>Link shortenting</li>
					<li className={styles.footerLink}>Branded Links</li>
					<li className={styles.footerLink}>Analytics</li>
				</ul>
				<ul className={styles.list}>
					<li className={styles.footerTitle}>Resources</li>
					<li className={styles.footerLink}>Blog</li>
					<li className={styles.footerLink}>Developers</li>
					<li className={styles.footerLink}>Support</li>
				</ul>
				<ul className={styles.list}>
					<li className={styles.footerTitle}>Company</li>
					<li className={styles.footerLink}>About</li>
					<li className={styles.footerLink}>Our Team</li>
					<li className={styles.footerLink}>Careers</li>
					<li className={styles.footerLink}>Contact</li>
				</ul>
				<ul className={styles.social}>
					<li className={styles.socialLink}>
						<Image src={facebookIcon} alt="facebook icon" />
					</li>
					<li className={styles.footerLink}>
						<Image src={twitterIcon} alt="twitter icon" />
					</li>
					<li className={styles.footerLink}>
						<Image src={pinterestIcon} alt="pinterest icon" />
					</li>
					<li className={styles.footerLink}>
						<Image src={instagramIcon} alt="instagram icon" />
					</li>
				</ul>
			</div>
		</footer>
	);
};
export default Footer;
