import styles from './page.module.css'
import getNotes from '@/utils/api-utils/getNotes'
import type { Note } from '@/types/data'
import NotesList from '@/components/global/NotesList/NotesList'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const notes: Array<Note> = await getNotes()

  return (
    <div className={styles.homeContainer}>
      <NotesList notes={notes}/>
    </div>
  )
}
