"use client"
import { FunctionComponent } from "react"
import styles from "../Header/Header.module.css"
import ThemeButton from "@/components/global/ThemeButton/ThemeButton"
import Search from "../Search/Search"
import Button from "@/components/global/Button/Button"
import { FaChevronLeft, FaPlus, FaSave } from "react-icons/fa"
import { usePathname, useRouter } from "next/navigation"
import { NOTE_FORM } from "@/constants/global/FORM"

const HeaderFunctional: FunctionComponent =  () => {
    const router = useRouter()
    const pathname = usePathname()

    const backHandle = ()=>{        
        router.push('/')
    }

    const createHandle = ()=>{
        router.push('/create')
    }

    return (    
        <div className={styles.headerSection}>
            {pathname === "/" ? 
                <>
                    <Search/>
                    <Button icon={<FaPlus/>} handle={createHandle}/>
                </>        
            :
                <>
                    <Button icon={<FaChevronLeft/>} handle={backHandle}/>
                    <Button icon={<FaSave/>} form={NOTE_FORM}/> 
                </>
            }
            <ThemeButton/> 
        </div>
    )
}

export default HeaderFunctional