import React from 'react';
import Hexagon from './hexagon';

const hexConst = Math.sqrt(3) / 2;
const toBaseAlphabet = number => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(number / 26)] + alphabet[number % 26];
}

export default class Hexagons extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.state = {
      ...this.state,
      height: this.state.width / hexConst,
      columns: props.columns,
      gap: props.hexGap
    };
    console.log(`repeat(${this.state.rows}, ${this.state.height}px)`);
    this.hexagonList = [];


    for(let i = 0; i < this.state.amount; i++) {
      this.hexagonList.push(
        <Hexagon
          key={i}
          width={this.state.width}
          margin={this.state.margin}
          paddingX={this.state.paddingX}
          paddingY={this.state.paddingY}
          gridArea={toBaseAlphabet(i)}
          backgroundColor={`rgb(${i}, ${i/2}, 80)`}>

        </Hexagon>
      );
    }

    this.getTemplateAreas = () => {
      let areas = ``;
      let pos = 0;
      let oddColumn = false;
      for(let i = 0; i < this.state.rows; i ++) {
        oddColumn = i % 2 === 1;
        areas += `'`;
        console.log("Rows: " + i);
        if (oddColumn) areas += `z${toBaseAlphabet(i)}zz`;
        for(let j = 0; j < (oddColumn ? this.state.columns - 1 : this.state.columns);j ++) {
          areas += ` ${toBaseAlphabet(pos)} ${toBaseAlphabet(pos)} `;
          pos++;
        }
        if (oddColumn) areas += `z${toBaseAlphabet(i)}z`;
        areas += `'`;
      }
      console.log(areas);
      return areas;
    };

    this.style = {
      display: 'grid',
      height: this.state.height,
      gridTemplateRows: `repeat(${(this.state.rows - 1)}, ${this.state.width - (this.state.height - this.state.width)}px)`,
      gridTemplateColumns: `repeat(${(this.state.columns - 1) * 2 }, ${(this.state.width - this.state.gap) / 2}px)`,
      gridTemplateAreas: this.getTemplateAreas(),
      gridGap: this.state.gap,
    };
    console.log("The style" + this.style);
  }
  render() {
    return(
      <div style={this.style}>
        {this.hexagonList}
      </div>
    );
  }
}
