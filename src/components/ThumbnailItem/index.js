import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, thumbnaileClicked} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickThumbnaile = () => {
    thumbnaileClicked(id)
  }

  return (
    <li className="image-items">
      <button className="image-button" type="button">
        <img
          src={thumbnailUrl}
          className="thumbnail-image"
          alt="thumbnail"
          onClick={onClickThumbnaile}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
