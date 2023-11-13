import './index.css'

const destinationItem = destItem => {
  const {name, imgUrl, id} = destItem
  return (
    <li className="list-item" key={id}>
      <img src={`${imgUrl}`} alt={`${name}`} className="image" />
      <p className="city">{name}</p>
    </li>
  )
}

export default destinationItem
