import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from 'containers/Landing'
import Counting from 'containers/Counting'

import { Provider } from 'mobx-react'
import { MainStore } from 'stores/MainStore'

import 'scss/fabric.scss'

class App extends React.Component {
  mainStore = new MainStore()

  render () {
    return (
      <Provider mainStore={this.mainStore}>
        <div className='container'>
          <div className='card-container'>
            <div className='section'>
              <div className='header'>
                <div className='title'>Hardcoded Title</div>
              </div>
            </div>
            <div className='card'>
              <div className='section'>
                <Router>
                  <div className='app'>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/counting' component={Counting} />
                  </div>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
