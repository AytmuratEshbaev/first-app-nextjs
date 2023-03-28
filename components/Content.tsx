import styles from '../styles/Home.module.css';
const contents = [
    {
        title: 'CREATE IT',
        number: 1,
        text: 'Choose from a selection of tastilicious toppings to create your own pizza'
    },
    {
        title: 'NAME IT',
        number: 2,
        text: 'Choose from a selection of tastilicious toppings to create your own pizza'
    },
    {
        title: 'FAME IT',
        number: 3,
        text: 'Choose from a selection of tastilicious toppings to create your own pizza'
    }
]


const Content = () => {
    return (
        <section className={styles.content}>
            {contents.map((content: any, i: number) =>
                <div className={styles.content__item} key={i}>
                    <div className={styles.content__number}>{content.number}</div>
                    <div className={styles.content__title}>{content.title}</div>
                    <div className={styles.content__text}>{content.text}</div>
                </div>
            )}
        </section>
    )
}

export default Content;