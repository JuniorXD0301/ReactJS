import React, {Component} from "react";

class Welcome extends Component {
  render() {
    const {name, superHeroName} = this.props;
    return <h1>Hello {name} a.k.a {superHeroName}</h1>;
  }
}

export default Welcome;