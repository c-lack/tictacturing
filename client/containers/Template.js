import React, {Component} from 'react'
import {Main} from '../styled/Template'

class Template extends Component {

  render() {
    return (
      <div>
        <Main>
          {this.props.children}
        </Main>
      </div>
    )
  }
}

export default Template
