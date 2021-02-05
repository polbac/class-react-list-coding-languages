import Text from './components/Text'
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showImage: true, 
      text: [
        'Text 1', 
        'Text 2', 
        'Text 3',
        'Text 4',
        'Text 5',
        'Text 6',
        'Text 7',
        'Text 8',
      ]
    }
  }

  render() {
    const { text, showImage } = this.state

    return (
      <div className="App " onClick={() => {
        this.setState({
          showImage: !showImage
        })
      }} >
          {text.map((texto, index) => <Text body={texto} danger={index % 2 !== 0}/>)}
          {showImage && <img src="https://i.stack.imgur.com/wzjnO.gif" />} 
      </div>
    );
  }
}

export default App;
