import styles from "./styles.module.css"

interface SystemMessageProps {
  message: string
}

const SystemMessage: React.FC<SystemMessageProps> = ({ message = "" }) => {
  return <p className={styles.container}>{message}</p>
}

export default SystemMessage
