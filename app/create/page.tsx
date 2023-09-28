import FormWrapper from "@/components/form/FormWrapper/FormWrapper"
import BodyInput from "@/components/main/BodyInput/BodyInput"
import TitleInput from "@/components/main/TitleInput/TitleInput"
import { NOTE_FORM } from "@/constants/global/FORM"
import { FunctionComponent } from "react"

const Create:FunctionComponent = ()=>{
    return (
        <FormWrapper name={NOTE_FORM}>
            <TitleInput
                
            />
            <BodyInput

            />
        </FormWrapper>
    )
}

export default Create