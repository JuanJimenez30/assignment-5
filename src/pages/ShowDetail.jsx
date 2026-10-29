
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import stripHtml from '../utils/stripHTML'

function ShowDetail() {
  const { id } = useParams()

  const [show, setShow] = useState(null)
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function fetchShowDetails() {
      setLoading(true)
      setError('')
      setShow(null)
      setCast([])

      try {
        const showResponse = await fetch(
          `https://api.tvmaze.com/shows/${id}`
        )

        if (!showResponse.ok) {
          throw new Error('Show not found. Please check the show ID.')
        }

        const showData = await showResponse.json()

        const castResponse = await fetch(
          `https://api.tvmaze.com/shows/${id}/cast`
        )

        if (!castResponse.ok) {
          throw new Error('Unable to load the show cast.')
        }

        const castData = await castResponse.json()

        if (!cancelled) {
          setShow(showData)
          setCast(castData.slice(0, 15))
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Unable to load show details.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchShowDetails()

    return () => {
      cancelled = true
    }
  }, [id])

  if (loading) {
    return (
      <main>
        <p>Loading show details...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <p role="alert">{error}</p>
        <Link to="/">Back to gallery</Link>
      </main>
    )
  }

  if (!show) {
    return (
      <main>
        <p>Show information is unavailable.</p>
        <Link to="/">Back to gallery</Link>
      </main>
    )
  }

  return (
    <main className="show-detail">
      <Link to="/">← Back to gallery</Link>

      <h1>{show.name}</h1>

      {show.image && (
        <img
          src={show.image.original || show.image.medium}
          alt={`${show.name} poster`}
        />
      )}

      <p>{stripHtml(show.summary)}</p>

      <p>
        <strong>Genres:</strong>{' '}
        {show.genres.length ? show.genres.join(', ') : 'Not listed'}
      </p>

      <p>
        <strong>Premiered:</strong> {show.premiered || 'Unknown'}
      </p>

      <p>
        <strong>Ended:</strong> {show.ended || 'Not announced'}
      </p>

      <p>
        <strong>Status:</strong> {show.status || 'Unknown'}
      </p>

      <p>
        <strong>Rating:</strong>{' '}
        {show.rating?.average ?? 'Not rated'}
      </p>

      <p>
        <strong>Network or channel:</strong>{' '}
        {show.network?.name ||
          show.webChannel?.name ||
          'Not available'}
      </p>

      <p>
        <strong>Language:</strong> {show.language || 'Unknown'}
      </p>

      <p>
        <strong>Schedule:</strong>{' '}
        {show.schedule?.days?.length
          ? `${show.schedule.days.join(', ')} at ${
              show.schedule.time || 'an unspecified time'
            }`
          : 'Not available'}
      </p>

      <p>
        <strong>Runtime:</strong>{' '}
        {show.runtime ? `${show.runtime} minutes` : 'Not available'}
      </p>

      <p>
        <strong>Type:</strong> {show.type || 'Unknown'}
      </p>

      <p>
        <a href={show.url} target="_blank" rel="noreferrer">
          View this show on TVmaze
        </a>
      </p>

      <h2>Cast</h2>

      {cast.length > 0 ? (
        <ul>
          {cast.map((member) => (
            <li key={`${member.person.id}-${member.character.id}`}>
              <strong>{member.person.name}</strong>
              {' as '}
              {member.character.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </main>
  )
}

export default ShowDetail
