import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


const CountryDetails = ({countries}) => {

    const {cca3} = useParams()
    const country = countries.find((c) => c.cca3 === cca3)

    return (
        <div className='country'>
            <p className='country__name'>Страна: {country.name.common}</p>
            <p className='country__capital'>Столица: {country.capital}</p>
            <img className='flag' src={country.flags.png} alt="" />
        </div>
    )
}

export default CountryDetails

CountryDetails.propTypes = {
    countries: PropTypes.array.isRequired
}