This is demo web application that consumes the [The Movie Database (TMDB)](https://www.themoviedb.org/) API to display a movie catalog in real time, featuring dynamic search and a responsive design.

## Description
This project is a frontend development demo built with **React** and **Vite**. The application consumes the TMDB service to fetch movie information (title, poster, rating, original language and release year), displaying the results in a card grid.

The core feature is a **debounced search**: instead of firing an API request on every keystroke, the search waits until the user stops typing for a brief moment before querying the service. This reduces unnecessary API calls, improves performance and avoids showing partial results while the user is still typing.

## Features

- Real-time movie search with debounce
- UI with custom gradients and cinematic typography
- Responsive design (adaptive grid based on screen width)
- Displays rating, original language and release year for each movie
- Loading and error state handling

## Tech stack

- **React** — library for building the UI
- **Vite** — build tool and development environment
- **CSS3** — custom styling (gradients, grid, flexbox)
- **[TMDB API](https://developer.themoviedb.org/docs)** — movie data source

## Running it locally

1. Clone the repository:
```bash
   git clone https://github.com/Lusmos/react_demo.git
   cd repo-name
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env.local` file in the project root with your own TMDB API key (You can get one for free by signing up at [themoviedb.org](https://www.themoviedb.org/settings/api)):

VITE_TMDB_API_KEY=your_api_key_here

4. Run the project:
```bash
   npm run dev
```

5. Open `http://localhost:5173` in your browser.