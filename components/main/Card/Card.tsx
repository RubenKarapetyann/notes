import { FunctionComponent } from "react"
import styles from "./Card.module.css"
import Title from "@/components/global/Title/Title";


const Card: FunctionComponent = ()=>{
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardTitleContainer}>
                <Title
                    title="Todo"
                    size={20}
                />
                <span className={styles.cardDate}>09.25.2018</span>
            </div>

            <p className={styles.cardText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Modi dicta magnam sit iste vero nostrum nam architecto rerum dolores! Perferendis aliquid ipsam dolorem voluptate eveniet cumque voluptatibus et.
            </p>
        </div>
    )
}

export default Card;