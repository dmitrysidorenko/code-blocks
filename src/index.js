import React from 'react'
import ReactDOM from 'react-dom'
import Console from './Console'

import './styles.css'

const console1State = {
  initialValue: '[1,2,3,4,5,6,7,8,9,10]',
  child: {
    initialValue: `props.data
  .reduce((a, b) => a + b, 0)`,
    child: {
      initialValue: 'props.data / 5',
      child: { initialValue: 'props.data / 3' }
    }
  }
}
const console2State = {
  initialValue: 'props.data / 3',
  props: { data: 24 }
}

class App extends React.Component {
  state = {
    blocks: [console1State, console2State]
  }
  addConsole = () => {}
  render() {
    return (
      <div className="App">
        <div>
          <Console
            state={this.state.blocks[0]}
            initialValue="[1,2,3,4,5,6,7,8,9,10]"
          >
            {({ output }) => (
              <Console
                props={{ data: output }}
                initialValue={`props.data
  .reduce((a, b) => a + b, 0)`}
              >
                {({ output }) => (
                  <Console
                    props={{ data: output }}
                    initialValue="props.data + 9001"
                  >
                    {({ output }) => (
                      <Console
                        props={{ data: output }}
                        initialValue="props.data / 3"
                      />
                    )}
                  </Console>
                )}
              </Console>
            )}
          </Console>
          <Console props={{ data: 1231212 }} initialValue="props.data / 3" />
        </div>
        <br />
        <button onClick={this.addConsole} className="btn btn-plus">
          + add block
        </button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
