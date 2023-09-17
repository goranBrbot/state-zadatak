import PropTypes from "prop-types";

export default function UserClass({name, years}) {
    return (
      <p>Pozdrav, moje ime je {name} i imam {years} godina</p>
    )
}

UserClass.propTypes = {
  name: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
  children: PropTypes.element
}
