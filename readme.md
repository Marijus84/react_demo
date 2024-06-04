# Running project

- install dependencies: `npm install`
- run project: `npm run dev` - usually starts with port:5173, but can be changed if busy, please review information in terminal after running the command `npm run dev`
- running tests: `npm run test`
- creating production build: `npm run build`

# Development choices

- Bundler. `Vite` was chosen for bundling as it is much faster on hot reload and production build bundling that commonly used webpack.
- JavaScript library. `React` is chosen for obvious reason - that project is as a homework applying for React Web Developer position.
- Type-check. `TypeScript` is used in the project. Usage is not exhaustive - used where it makes sense by developers choice, not everywhere where possible, which decreases readability and doesn't bring additional value for development.
- Testing. `React testing library` and `vitest` are chosen based on bundler and JS library choices.
- Linting. `eslint` and `prettier` are used for linting and code formatting.
- Code structure. Project is partially ready for scaling, having its components, api call(s), other structural in separate folders, extracting global style to separate part. Separate folder for pages though is not created as current version has only one page. Constant values for project are also separated to global file (e.g. breakpoint values are there).
- Styling. `Styled components` are used for CSS styling of components as it is readable, component applied and simple to code solution.
- Image API. `pixabay` API was chosen instead of `flickr` for the reason that during development `flickr` API and documentation pages were having issues and not loading or taking very much time to load. 
- Other. In React code exhaustive usage of advanced React hooks and techniques are not used as not needed for such scope project. If scaling, additional techniques and store managing might be relevant, e.g. `useReducer`, `customHooks`, etc.

