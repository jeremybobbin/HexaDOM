import React, { Component } from 'react';
import Hexagon from './hexagon';
import Hexagons from './hexagons';
class App extends Component {
  render() {
    return (
      <div className="App" style={{padding: 50}}>
        <Hexagons
          amount={500}
          width={60}
          margin={0}
          paddingX={10}
          paddingY={30}
          columns={20}
          rows={20}
          hexGap={5}
          />
      </div>
    );
  }
}

export default App;
