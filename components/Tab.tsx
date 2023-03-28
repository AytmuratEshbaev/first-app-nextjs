import styles from '../styles/Home.module.css';
import Link from 'next/link';
const links = [
    {
        text: 'pizza cartoon',
        href: '/'
    },
    {
        text: 'Burger',
        href: '/'
    },
    {
        text: 'sandwich',
        href: '/'
    },
    {
        text: 'LOREMISPSUM Us',
        href: '/'
    }
]


const Tab = () => {
    return (
        <ul className={styles.tab}>
            {links.map((link: { text: string, href: string }, i: number) =>
                <li className={styles.tab__item} key={i}>
                    <Link href={link.href} className={styles.tab__link}>{link.text}</Link>
                </li>
            )}
        </ul>

    )
}
export default Tab;