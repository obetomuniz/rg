import usePosts from "@/hooks/usePosts"
import { PostListItem, SystemMessage } from "@/components"

import styles from "./styles.module.css"

const PostList: React.FC = () => {
  const { loading, error, data } = usePosts()

  if (error) {
    return <SystemMessage message={`Error: ${error.message}`} />
  }

  if (loading || !data?.posts) {
    return <SystemMessage message={`Loading Posts...`} />
  }

  if (data.posts.length === 0) {
    return <SystemMessage message={`No posts found.`} />
  }

  const items = data.posts.map((post: Post) => (
    <PostListItem key={`post-${post.id}`} data={post} />
  ))

  return <ul className={styles.container}>{items}</ul>
}

export default PostList
