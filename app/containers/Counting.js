import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('mainStore')
@observer
class Counting extends React.Component {
  componentWillMount() {
    console.log('component is about to mount')
  }
  componentDidMount() {
    console.log('component did mount')
  }
  componentWillUnmount() {
    console.log('about to unmount...')
  }
  render () {
    return (
      <div className='counting'>
        <h1>HELLO</h1>
      </div>
    )
  }
}

export default Counting
