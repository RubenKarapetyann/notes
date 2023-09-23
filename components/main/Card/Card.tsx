import { FunctionComponent } from "react"
import styles from "./Card.module.css"
import Title from "@/components/global/Title/Title";
import type { Note } from "@/types/data";

const Card: FunctionComponent<Note> = ({
    title,
    body,
    publicDate,
    id,
    likes,
    dislikes
}:Note)=>{

    const date = new Date(publicDate).getFullYear()
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardTitleContainer}>
                <Title
                    title={title}
                    size={20}
                />
                <span className={styles.cardDate}>{date}</span>
            </div>

            <p className={styles.cardText}>
                {body}
            </p>
        </div>
    )
}

export default Card;