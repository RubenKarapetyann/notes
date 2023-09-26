"use client"
import { FunctionComponent } from "react"
import styles from "../Header/Header.module.css"
import ThemeButton from "@/components/global/ThemeButton/ThemeButton"
import Search from "../Search/Search"
import Button from "@/components/global/Button/Button"
import { FaChevronLeft, FaSave } from "react-icons/fa"
import { usePathname, useRouter } from "next/navigation"

const HeaderFunctional: FunctionComponent =  () => {
    const router = useRouter()
    const pathname = usePathname()

    const backHandle = ()=>{        
        router.push('/')
    }

    return (    
        <div className={styles.headerSection}>
            {pathname === "/" ? 
                <Search/>        
            :
                <Button icon={<FaChevronLeft/>} handle={backHandle}/>
                // {/* <Button icon={<FaSave/>}/> */}
            }
            <ThemeButton/> 
        </div>
    )
}

export default HeaderFunctional