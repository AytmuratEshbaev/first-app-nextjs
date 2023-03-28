import styles from '../styles/Home.module.css';
import Link from 'next/link';
const links = [
    {
        text: 'Newsletter',
        href: '/'
    },
    {
        text: 'Community',
        href: '/'
    },
    {
        text: 'Shop',
        href: '/'
    },
    {
        text: 'Contact Us',
        href: '/'
    }
]


const Menu = () => {
    return (
        <ul className={styles.menu}>
            {links.map((link: { text: string, href: string }, i: number) =>
                <li className={styles.menu__item} key={i}>
                    <Link href={link.href} className={styles.menu__link}>{link.text}</Link>
                </li>
            )}
        </ul>
    )
}

export default Menu;