import React, {Component} from 'react';
import { render } from 'react-dom';

const I18N = window.i18n;

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return <div>{I18N.error.info}</div>
  }
}
render(<ErrorPage />, document.getElementById('Error'));