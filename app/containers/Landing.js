import React from 'react'
// import Counting from 'containers/Counting'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@inject('mainStore')
@observer
class Landing extends React.Component {
  handleClick = (e) => {
    console.log(e)
  }
  handleTitle = (e) => {
    const ms = this.props.mainStore
    ms.pageTitle = e.target.value
  }
  render () {
    const ms = this.props.mainStore
    return (
      <div className='section'>
        <div className='row-sm'>
          <input onChange={this.handleTitle} value={ms.pageTitle} className='form-input-text' type='text' />
        </div>
        <div className='buttons'>
          <Link to='counting'>
            <button onClick={this.handleClick} className='button primary-action'>Next</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Landing
