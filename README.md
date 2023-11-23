# React CI/CD Learning Project

This project is a React application where we learn and implement Continuous Integration (CI) and Continuous Deployment (CD) using GitHub Actions and Netlify.

## Project Setup

- React application created using Create React App.
- A simple component added for learning purposes.
- Basic unit tests written for the component.

## Continuous Integration

- CI is set up using GitHub Actions.
- The workflow includes:
  - Installing dependencies.
  - Running tests.
  - Building the React application.
- The CI pipeline runs on every push and pull request to the main branch.

## Continuous Deployment

- CD is set up with Netlify.
- Netlify automatically deploys the application whenever changes are pushed to the main branch.
- The build and deployment process is managed by Netlify, without the need for additional configuration in the GitHub Actions workflow.

### Steps for Manual Deployment

1. Run `npm run build` to create a production build of the app.
2. Drag and drop the `build` folder to Netlify for manual deployment.

### Automatic Deployment with Netlify

1. Connect the GitHub repository with the React app to Netlify.
2. Set up build settings on Netlify to point to the `build` directory.
3. Netlify automatically builds and deploys the app on every push to the main branch.

## Testing the Deployment

- Changes made in the app can be tested locally.
- Once changes are pushed to GitHub, CI/CD pipelines ensure that the app is automatically tested and deployed.

## Conclusion

This setup demonstrates a basic CI/CD pipeline using GitHub Actions and Netlify, making the development process more efficient and reliable.
