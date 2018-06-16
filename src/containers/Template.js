import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Main} from '../styled/Template'

injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
