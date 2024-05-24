import { useParams } from "react-router-dom"

export const Video = () => {
  const { id } = useParams()
  
  return (
    <div>Video</div>
  )
}
