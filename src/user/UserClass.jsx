import { Component } from 'react';
import PropTypes from "prop-types";

export default class UserClass extends Component {
  render() {
    const { name, years } = this.props
    return (
      <p>Pozdrav, moje ime je {name} i imam {years} godina</p>
    )
  }
}

UserClass.propTypes = {
  name: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
  children: PropTypes.element
}
