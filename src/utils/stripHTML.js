
function stripHtml(html) {
  if (!html) {
    return 'No summary available.'
  }

  return html.replace(/<[^>]*>/g, '').trim()
}

export default stripHtml
