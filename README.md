
# TV Show Gallery

## Project Description

This project is a React single-page application that lets users search for television shows using the TVmaze API. Users can browse show cards, view summaries and genres, see ratings and premiere dates, preview cast members, and open a detail page for a selected show.

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- HTML and CSS
- TVmaze API

## How to Run the Project

1. Install Node.js and npm.
2. Clone or download this repository.
3. Open a terminal in the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL shown in the terminal.

## React Concepts and Where They Are Used

| Concept | File | How It Is Used |
|---|---|---|
| 1. Components | `src/App.jsx`, `src/pages/Gallery.jsx`, `src/pages/ShowDetail.jsx` | The application is divided into reusable components. |
| 2. Props | `src/components/ShowCard.jsx`, `src/components/ShowList.jsx` | Show data is passed from parent components to child components. |
| 3. State | `src/pages/Gallery.jsx`, `src/pages/ShowDetail.jsx`, `src/components/ShowCard.jsx` | State stores search results, loading status, errors, show details, and cast members. |
| 4. Effects | `src/pages/Gallery.jsx`, `src/pages/ShowDetail.jsx`, `src/components/ShowCard.jsx` | `useEffect` loads API data when components mount or their dependencies change. |
| 5. Events and controlled inputs | `src/components/SearchForm.jsx` | The search input uses `value`, `onChange`, and form submission handling. |
| 6. Lists and keys | `src/components/ShowList.jsx`, `src/components/ShowCard.jsx`, `src/pages/ShowDetail.jsx` | `map()` renders shows and cast members with stable keys. |
| 7. Conditional rendering | `src/pages/Gallery.jsx`, `src/pages/ShowDetail.jsx`, `src/components/ShowCard.jsx` | The app displays loading messages, errors, fallback values, and results when appropriate. |
| 8. Routing | `src/App.jsx`, `src/components/ShowCard.jsx`, `src/pages/ShowDetail.jsx` | React Router navigates between the gallery and individual show detail pages. |

## Reflection

Building this project helped me understand how React can organize a web application into smaller components. I learned how props allow components to share information and how state keeps track of search results, loading messages, errors, and cast members. I also learned how `useEffect` can fetch information from an API when a component loads. Using React Router helped me understand how to move between pages without reloading the entire website.

One challenge was connecting the TVmaze API to the different components while handling missing information and failed requests. I addressed this by checking responses, displaying fallback messages, and testing invalid show IDs. I also learned why lists need stable keys and why controlled inputs are useful for search forms. Styling the cards with CSS helped me make the gallery responsive. Overall, this project gave me more practice connecting React concepts to a working application and helped me understand how the different parts of a single-page application work together.

## AI Usage Disclosure

I used ChatGPT for step-by-step explanations, implementation guidance, debugging support, and help understanding React concepts. I reviewed and tested the code in my application. I am responsible for understanding the final implementation and verifying that it meets the assignment requirements.

## API Attribution

Show information and cast data are provided by the [TVmaze API](https://www.tvmaze.com/api).
