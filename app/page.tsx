import Card from '@/components/main/Card/Card'
import styles from './page.module.css'
import getNotes from '@/utils/api-utils/getNotes'
import type { Note } from '@/types/data'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const notes: Array<Note> = await getNotes()

  return (
    <div className={styles.homeContainer}>
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
    </div>
  )
}
