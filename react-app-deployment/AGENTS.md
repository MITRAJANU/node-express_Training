# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite React app. The browser entry point is `src/main.jsx`, which renders the root `App` component from `src/App.jsx`. Component-specific styles live in `src/App.css`, while global CSS belongs in `src/index.css`. Import bundled image assets from `src/assets/`, such as `src/assets/hero.png`; place static files that should be served unchanged in `public/`, such as `public/icons.svg` and `public/favicon.svg`. Build output is generated in `dist/` and is ignored by ESLint.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server with hot module replacement.
- `npm run build`: create a production bundle in `dist/`.
- `npm run preview`: serve the production bundle locally for verification.
- `npm run lint`: run ESLint across the repository.

There is currently no `npm test` script. Add a test runner before documenting or relying on automated tests.

## Coding Style & Naming Conventions

Use modern JavaScript modules and React function components. Follow the existing JSX style: two-space indentation, single quotes, no semicolons, and concise event handlers such as `onClick={() => ...}`. Name React components in PascalCase (`App.jsx`) and regular variables, functions, CSS classes, and IDs in descriptive camelCase or kebab-case as appropriate. Keep component CSS close to the component unless the style is genuinely global.

## Testing Guidelines

No testing framework is configured yet. When adding tests, prefer Vitest with React Testing Library because it fits Vite projects well. Place tests beside the file under test using `*.test.jsx` or in a dedicated `src/__tests__/` directory. Cover user-visible behavior, rendering states, and interactions before snapshot-style assertions.

## Commit & Pull Request Guidelines

Recent history uses short, scoped commit subjects such as `docs: add Postman collection for final API demo`, `auth: replace bcrypt with Node crypto password hashing`, and `checkpoint-06: secure API with JWT RBAC and ownership checks`. Keep commits imperative, specific, and prefixed with a useful scope.

Pull requests should include a brief summary, the commands run (`npm run lint`, `npm run build`), and screenshots or screen recordings for visible UI changes. Link related issues when available and note any missing tests or follow-up work.

## Security & Configuration Tips

Do not commit `node_modules/`, `dist/`, secrets, or local environment files. Keep dependency changes reflected in both `package.json` and `package-lock.json`. Use `public/` only for assets intended to be publicly served.
