import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count {count}</h1>
        {count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        <button type="button" onClick={this.onClickIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
