import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import MainPage from './components/MainPage'

const App = () => {
  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const result = await response.json()
      setCountries(result)
    } catch {
      console.log('Произошла ошибка при загрузке данных')
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage countries={countries}/>} />
        <Route path="/country/:cca3" element={<CountryDetails countries = {countries} />} />
      </Routes>
    </Router>
    
  )
}

export default App
