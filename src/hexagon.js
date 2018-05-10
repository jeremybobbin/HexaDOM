import React from 'react';
import Hexagon from './hexagon';

const hexConst = Math.sqrt(3) / 2;

export default class Hexagons extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    if(typeof this.state.width !== 'number' && typeof this.state.width !== 'number') {
      throw new Error('Either width or height required.');
    }
    if (typeof this.state.width  !== "number") this.state.width  = this.state.height * hexConst;
    if (typeof this.state.height !== "number") this.state = {
      ...this.state,
      height: this.state.width / hexConst
    };
    if (typeof this.state.margin !== "number") this.state.margin = 0;

    this.outerStyles = {
      overflowX: 'hidden',
      overflowY: 'hidden',
      width: this.state.width,
      height: this.state.height,
      margin: this.state.margin,
      gridArea: this.state.gridArea
    };
    if(typeof this.state.styles === "object") this.outerStyles = Object.assign(this.outerStyles, this.state.styles);

    console.log(this.outerStyles);
    this.midStyles = {
      backgroundColor: this.state.backgroundColor,
      width: this.state.width, /* = (100-2.5) / 3.5 */
      paddingBottom: this.state.width / hexConst, /* =  width /0.866 */
      transform: 'rotate(-60deg) skewY(30deg)',
      position: 'relative',
    };

    this.innerStyles = {
      width: this.state.width - this.state.paddingX * 2,
      height: this.state.height - this.state.paddingY * 2,
      paddingTop: this.state.paddingY,
      paddingBottom: this.state.paddingY,
      paddingLeft: this.state.paddingX,
      paddingRight: this.state.paddingX,
      position: 'absolute',
      transform: 'skewY(-30deg) rotate(60deg)',
    };
  }

  render() {
    return(
      <div style={this.outerStyles}>
       <div style={this.midStyles}>
        <div style={this.innerStyles}>
          {this.props.children}
        </div>
       </div>
      </div>
    );
  }
}
