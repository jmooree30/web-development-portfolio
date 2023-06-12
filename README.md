# Web Development Portfolio Website - README

This repository contains the source code for my portfolio website, which serves as a platform to promote myself as a web developer. It showcases my skills, projects, and experience.

## Dependencies

The following dependencies are required to run this project:

- `dotenv`: ^16.1.4
- `react`: ^16.14.0
- `react-dom`: ^16.14.0
- `react-router-dom`: ^4.3.1
- `react-router-hash-link`: ^1.2.2

## Development Setup

To set up the development environment, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Install `netlify-cli` globally by running `npm install -g netlify-cli`.
4. Start the development server with `netlify dev` to use Netlify's local development environment. If you don't need to test the lambda functions, you can also run `npm run start` to start the development server without Netlify.

**Note:** If you don't have `netlify-cli` installed, you can install it globally using `npm install -g netlify-cli`.

## Netlify Hosting and Netlify Lambda Functions

This website is hosted on Netlify, a cloud platform that offers hosting and continuous deployment. It leverages Netlify Lambda Functions to avoid the need for managing a separate API server. The functions can be found in the `netlify/functions` directory.

When deploying the site on Netlify, the functions will automatically be deployed as serverless functions, allowing seamless integration with the website.

## Available Scripts

In the project directory, you can run the following scripts:

- `start`: Runs the development server using Vite.
- `build`: Builds the production-ready version of the website.
- `serve`: Serves the production build locally for previewing.

## Browsers Compatibility

The website is designed to be compatible with the following browsers:

- Production:
  - >0.2%
  - not dead
  - not op_mini all

- Development:
  - last 1 chrome version
  - last 1 firefox version
  - last 1 safari version

## Development Dependencies

The following dev dependencies are used in this project:

- `@vitejs/plugin-react`: ^4.0.0
- `netlify-lambda`: ^2.0.16
- `vite`: ^4.3.9
- `vite-plugin-svgr`: ^3.2.0
- `vite-tsconfig-paths`: ^4.2.0

Feel free to explore the code and customize the website to suit your needs. Thank you for visiting!
