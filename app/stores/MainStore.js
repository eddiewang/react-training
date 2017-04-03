import { observable } from 'mobx'
import axios from 'axios'

export class MainStore {
  @observable pageTitle = 'Codenightmares'
  @observable counter = 0
  @observable currentNumber = 0

  addNumber = async (n) => {
    console.log(n)
    const result = await axios.post('/api/number', { number: n })
    this.counter += result.data.number
  }
}
