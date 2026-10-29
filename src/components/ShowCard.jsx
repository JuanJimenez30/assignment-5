
import { Link } from 'react-router-dom'
import stripHtml from '../utils/stripHTML'
import { useEffect, useState } from 'react'

function ShowCard({ show }) {


    const [cast, setCast] = useState([])
    const [castLoading, setCastLoading] = useState(true)
    const [castError, setCastError] = useState(false)

    useEffect(() => {
        let cancelled = false

        async function fetchCast() {
            try {
                setCastLoading(true)
                setCastError(false)

                const response = await fetch(
                    `https://api.tvmaze.com/shows/${show.id}/cast`
                )

                if (!response.ok) {
                    throw new Error('Unable to load cast')
                }

                const data = await response.json()

                if (!cancelled) {
                    setCast(data.slice(0, 3))
                }
            } catch {
                if (!cancelled) {
                    setCastError(true)
                }
            } finally {
                if (!cancelled) {
                    setCastLoading(false)
                }
            }
        }

        fetchCast()

        return () => {
            cancelled = true
        }
    }, [show.id])

    return (
        <article className="show-card">
            {show.image && (
                <img
                    src={show.image.medium}
                    alt={`${show.name} poster`}
                />
            )}

            <h2>
                <Link to={`/shows/${show.id}`}>
                    {show.name}
                </Link>
            </h2>

            <p>
                <strong>Premiered:</strong>{' '}
                {show.premiered || 'Unknown'}
            </p>

            <p>
                <strong>Last updated:</strong>{' '}
                {show.updated
                    ? new Date(show.updated * 1000).toLocaleString()
                    : 'Unknown'}
            </p>

            <p>{stripHtml(show.summary)}</p>

            <p>
                <strong>Genres:</strong>{' '}
                {show.genres?.length
                    ? show.genres.join(', ')
                    : 'Not listed'}
            </p>

            <div className="cast-preview">
                <strong>Cast:</strong>

                {castLoading && <p>Loading cast...</p>}

                {castError && <p>Cast is currently unavailable.</p>}

                {!castLoading && !castError && cast.length === 0 && (
                    <p>No cast information available.</p>
                )}

                {!castLoading && !castError && cast.length > 0 && (
                    <ul>
                        {cast.map((member) => (
                            <li key={`${member.person.id}-${member.character.id}`}>
                                {member.person.name} as {member.character.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <p>
                <strong>Rating:</strong>{' '}
                {show.rating?.average ?? 'Not rated'}
            </p>

            <a
                href={show.url}
                target="_blank"
                rel="noreferrer"
            >
                View on TVmaze
            </a>
        </article>
    )
}

export default ShowCard
