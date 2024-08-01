import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainPage = ({countries}) => {
  return (
    <div>
        <h1>Список стран:</h1>
          <ul>
            {countries.map((country) => (
              <li key={country.cca3}>
                <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
              </li>
            ))}
          </ul>
      </div>
  )
}

export default MainPage

MainPage.propTypes = {
    countries: PropTypes.array.isRequired
}