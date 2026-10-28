
function SearchForm({ query, setQuery, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault()
    onSearch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="show-search">Search TV shows</label>

      <input
        id="show-search"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try The Office..."
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
