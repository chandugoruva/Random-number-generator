import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChange = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-image">
        <div className="bg-sub">
          <h1 className="heading">Random Number</h1>
          <p className="paragraphh">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button className="button" onClick={this.onChange}>
              Generate
            </button>
          </div>

          <p className="paragraphs">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
