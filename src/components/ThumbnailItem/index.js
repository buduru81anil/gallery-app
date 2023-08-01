// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = props

  return (
    <li className="nature-list-item">
      <img src={imageUrl} alt={thumbnailAltText} className="thumbnail-item" />
    </li>
  )
}

export default ThumbnailItem
