
import { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm'

function Gallery() {
  const [query, setQuery] = useState('naruto')
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('naruto')

  async function searchShows(term) {
    if (!term.trim()) {
      setShows([])
      setError('Please enter a TV show title or keyword.')
      setLoading(false)
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(term)}`
      )

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please wait before searching again.')
        }

        throw new Error('Unable to load TV shows. Please try again.')
      }

      const data = await response.json()

      setShows(data.slice(0, 10).map((item) => item.show))
      setSearchTerm(term)
    } catch (err) {
      setShows([])
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    searchShows('naruto')
  }, [])

  return (
    <main>
      <h1>TV Show Gallery</h1>

      <SearchForm
        query={query}
        setQuery={setQuery}
        onSearch={() => searchShows(query)}
      />

      <p>
        Search results for: <strong>{searchTerm}</strong>
      </p>

      {loading && <p>Loading shows...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && shows.length === 0 && (
        <p>No shows found.</p>
      )}

      {!loading && !error && shows.length > 0 && (
        <p>Found {shows.length} shows.</p>
      )}
    </main>
  )
}

export default Gallery
