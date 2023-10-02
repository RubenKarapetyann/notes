import Card from "@/components/main/Card/Card"
import { Note } from "@/types/data"
import { NotesListProps } from "@/types/global"

const NotesList = ({ notes }: NotesListProps) => {
    return (
        <>
            {notes.map((note:Note)=>{
                return (
                    <Card
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        publicDate={note.publicDate}
                        likes={note.likes}
                        dislikes={note.dislikes}
                    />
                )
            })}
        </>
    )
}
export default NotesList