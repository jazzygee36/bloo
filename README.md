# Project Title

Front-End Software Engineer Challenge

## Description

A responsive, dynamic application using Next.js, TypeScript, and Tailwind CSS to
display and manage a list of movies fetched from The Movie Database

## Installation Instructions

1. Clone the repository: `git clone https://github.com/jazzygee36/bloo.git`
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`

## Usage Guide

- Access the application at `http://localhost:3000`.
- API documentation is available at `https://developer.themoviedb.org/reference/intro/getting-started`.

## Design Decisions

- **Frontend**:
  Used Next Js for its reusable component structure and scalability and for the strong present of of SEO.
  TypeScript to handle the data type and also detect feature error.
  Tailwind as design system for is light and for its dynamic responsiveness accross all platform.
- **State Management**: React Query is an excellent choice for applications that:
  Frequently fetch, update, or sync server data.
  Need caching, deduplication, and background fetching capabilities.
  Aim to improve performance and user experience with minimal boilerplate code.

- **Features**:
  Movie Filtering: Users can filter movies by their title.
  Detailed View: Users can click on a movie card to view more detailed information about the selected movie.
  Favorites Management: Users can add movies to their favorites list or remove them as desired.
