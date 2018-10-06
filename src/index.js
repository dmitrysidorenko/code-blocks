import React from 'react'
import ReactDOM from 'react-dom'
import Console from './Console'

import './styles.css'

function App() {
  return (
    <div className="App">
      <button>+</button>
      <div>
        <Console initialValue="[1,2,3,4,5,6,7,8,9,10]">
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
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
