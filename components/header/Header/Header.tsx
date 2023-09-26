import { FunctionComponent } from "react"
import styles from "./Header.module.css"
import ManuButton from "../ManuButton/ManuButton"
import Title from "../../global/Title/Title"
import ThemeButton from "@/components/global/ThemeButton/ThemeButton"
import Search from "../Search/Search"
import Button from "@/components/global/Button/Button"
import { FaChevronLeft, FaSave } from "react-icons/fa"
import { redirect } from 'next/navigation'

const Header: FunctionComponent =  () => {
    const backHandle = ()=>{
        redirect('/')
    }
    return (    
        <div className={styles.header}>
            <div className={styles.headerSection}>
                {/* <ManuButton/> */}
                <Title
                    title="Notes"
                />
            </div>
            <div className={styles.headerSection}>
                {/* <Button icon={<FaChevronLeft/>} handle={backHandle}/> */}
                {/* <Button icon={<FaSave/>}/> */}
                {/* <Search/> */}
                <ThemeButton/> 
            </div>
        </div>
    )
}

export default Header