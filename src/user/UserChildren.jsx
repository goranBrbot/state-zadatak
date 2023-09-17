import PropTypes from "prop-types";

export default function UserChildren({name, years, children}) {
    return (
      <>
          <p>Pozdrav, moje ime je {name} i imam {years} godina</p>
          {children}
      </>
    )
  }

  UserChildren.propTypes = {
    name: PropTypes.string.isRequired,
    years: PropTypes.number.isRequired,
    children: PropTypes.element
  }
