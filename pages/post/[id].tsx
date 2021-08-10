import { Layout, PostView } from "@/components"

interface PostProps {
  id: number
}

const Post: React.FC<PostProps> = ({ id }) => (
  <Layout>
    <PostView id={id} />
  </Layout>
)

export const getServerSideProps = ({ query: { id } }) => ({
  props: {
    id: parseInt(id),
  },
})

export default Post
