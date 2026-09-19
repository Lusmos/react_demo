import { useState, useEffect } from 'react'
import { useDebounce } from 'react-use'
import background from '../images/background.jpg'
import banner from '../images/banner.png'
import Search from './Components/Search.jsx'
import MovieCard from './Components/MovieCard.jsx'
import './App.css'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
 
const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [debouncedSearchTermm, setDebounceSearchTerm] = useState('')

  useDebounce(() => setDebounceSearchTerm(searchTerm), 900, [searchTerm])

  const fetchMovies = async (searchT = "") => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const endpoint = searchT ? `${API_URL}/search/movie?query=${encodeURIComponent(searchT)}`
                             : `${API_URL}/discover/movie?sort_by=popularity.desc`

      const response = await fetch(endpoint, API_OPTIONS)

      if (!response.ok) {
        throw new Error('Failed to fetch movies.')
      }

      const data = await response.json()

      if (data.results.length === 0) {
        setErrorMessage(data.error || 'Movies just left the building! No movies found.')
        setMovieList([])
        return
      }

      setMovieList(data.results || [])

    } catch (error) {
        console.error('BOOM!:', error)
        setErrorMessage('Failed to fetch movies.')
    } finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTermm)
  }, [debouncedSearchTermm])

  return (
    <main style={{ backgroundImage: `url(${background})` }} className='background'>
      <div className="pattern" />
      <div className="wrapper"> 
        <header>
          <img src={banner} alt="MoviesBanner" className='banner' />
          <h1 className="text-gradient">Movies At Your Hand </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          {isLoading ? (
            <span className="spinner"></span>
          ) : errorMessage ? (
            <p className="error-message">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
      <div className="footer">
          <h2>2026</h2>
      </div>       
    </main>
  )
}

export default App
