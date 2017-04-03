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
    setInterval(() => {
      this.props.mainStore.counter += 1
    }, 1000)
  }
  componentWillUnmount() {
    console.log('about to unmount...')
  }
  handleAdd = () => {
    this.props.mainStore.addNumber(Number(this.props.mainStore.currentNumber))
  }
  handleRemove = () => {
    this.props.mainStore.counter -= 1
  }
  handleChange = e => {
    !isNaN(e.target.value) ? this.props.mainStore.currentNumber = e.target.value : console.log('Not a number')
  }
  render () {
    const ms = this.props.mainStore
    return (
      <div className='counting'>
        <p className='p1'>My Special Counter</p>
        <p className='p2'>This is a magic counter that starts on component mount! Press add me to add 1 or remove me to remove 1</p>
        <div className='number-value size-lg'>{ms.counter}</div>
        <input type='text' className='form-input-text' onChange={this.handleChange} />
        <div className='buttons'>
          <button onClick={this.handleAdd} className='button primary-action'>Add Me</button>
          <button onClick={this.handleRemove} className='button secondary-action'>Remove Me</button>
        </div>
      </div>
    )
  }
}

export default Counting
