import Link from "next/link"

import styles from "./styles.module.css"

interface PostListItemProps {
  data: Post
}

const PostListItem: React.FC<PostListItemProps> = ({ data: { id, title } }) => {
  return (
    <li className={styles.container}>
      <Link href={`/post/${id}`}>
        <a className={styles.link}>{title}</a>
      </Link>
    </li>
  )
}

export default PostListItem
