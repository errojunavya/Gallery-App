// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnailItem = () => {
    updateActiveId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickThumbnailItem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
