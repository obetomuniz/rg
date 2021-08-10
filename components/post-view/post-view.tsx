import Link from "next/link"

import { SystemMessage } from "@/components"
import usePost from "@/hooks/usePost"

import styles from "./styles.module.css"

interface PostViewProps {
  id: number
}

const PostView: React.FC<PostViewProps> = ({ id }) => {
  const { loading, error, data } = usePost(id)

  if (error) {
    return <SystemMessage message={`Error: ${error.message}`} />
  }

  if (loading || !data?.post) {
    return <SystemMessage message={`Loading Post...`} />
  }

  const { title, body } = data.post

  if (!title || !body) {
    return <SystemMessage message={`No post found.`} />
  }

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <a className={styles.backToHome}>👈 Back to Home</a>
      </Link>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{body}</p>
    </div>
  )
}

export default PostView
