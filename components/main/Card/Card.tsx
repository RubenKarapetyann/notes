import { FunctionComponent } from "react"
import styles from "./Card.module.css"
import Title from "@/components/global/Title/Title";
import type { Note } from "@/types/data";
import Link from "next/link";
import CardBody from "@/components/global/CardBody/CardBody";

const Card: FunctionComponent<Note> = ({
    title,
    body,
    publicDate,
    id,
    likes,
    dislikes
}:Note)=>{

    const date = `${new Date(publicDate).toLocaleString()}`
    const bodyText = body.length > 300 ? `${body.slice(0,297)}...` : body 

    return (
        <Link href={`/${id}`} className="link">
            <div className={styles.cardContainer}>
                <div className={styles.cardTitleContainer}>
                    <Title
                        title={title}
                        size={20}
                    />
                    <span className={styles.cardDate}>{date}</span>
                </div>

                <CardBody text={bodyText}/>
            </div>
        </Link>
    )
}

export default Card;