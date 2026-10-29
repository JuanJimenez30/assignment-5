
import ShowCard from './ShowCard'

function ShowList({ shows }) {
  return (
    <section className="show-grid">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </section>
  )
}

export default ShowList
