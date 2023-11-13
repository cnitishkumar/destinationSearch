import {Component} from 'react'
import './index.css'
import destinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value.toLowerCase()})

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredArray = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destnations-container">
          {filteredArray.map(eachItem => destinationItem(eachItem))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
