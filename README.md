
# TV Show Gallery

## Project Description

The project is a single-page React app, which lets users search for their favorite or any tv shows. The application uses the TVmaze API. When searching a user can browse the show cards, which have their own summarize, rating, dates, and cast members, and users can also view the shows detail page which is a more detailed page of the show.

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

When building this project, it helped me experiment and understand how React organize a application into manageable components, and gained a good understanding of how props can allow different components to share information with one another, and how states keep track of search results, error messages, loading messages, and cast members. I also learned how to effectively use `useEffect`, with using it to fetch information from the API when components load. React router also was useful into moving between my gallery and show details page without reloading the whole website.

One of my biggest challenge was the handling of missing components when the TVmaze didn't have it available. I combatted this challenge by having checks for responses, and fallback messages when an error occurs. I also tested for invalid ID. I was also having a hard time understanding why lists need good stable keys, and why its suggested to have controlled inputs in search forms. This project boosted my knowledge and experience in using React giving me practice on how I can organize a application.

## AI Usage Disclosure

I used ChatGPT as a additional resource in the process of development. It helped me understand more aspects of React components and provided guidance in how to handle errors, and check responses.

## API Attribution

Show information and cast data are provided by the [TVmaze API](https://www.tvmaze.com/api).
