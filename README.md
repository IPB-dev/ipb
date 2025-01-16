# Project Structure

The project follows a monorepo structure using Yarn workspaces:

- `packages/frontend` - React application
- `packages/backend` - NestJS application

# Prerequisites

- Node.js >=16.0.0
- Yarn
- PostgreSQL

# Quick Start

1. Clone the repository:
```bash
git clone https://github.com/IPB-dev/ipb.git
cd ipb
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend packages
   - Update the values according to your environment

4. Start development servers:
```bash
yarn dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

# Available Scripts

- `yarn dev` - Start both frontend and backend in development mode
- `yarn frontend <command>` - Run frontend-specific commands
- `yarn backend <command>` - Run backend-specific commands
- `yarn build` - Build both packages for production
- `yarn test` - Run tests for both packages
- `yarn lint` - Run linting for both packages

# Technology Stack

## Frontend
- React
- TypeScript
- Material-UI
- Axios
- React Router

## Backend
- NestJS
- TypeORM
- PostgreSQL
- TypeScript

# Development

## Frontend
The frontend is a Create React App application. For detailed information about the frontend development, please refer to `packages/frontend/README.md`.

## Backend
The backend is a NestJS application with TypeORM for database management. The API documentation is available at `/api` endpoint when running in development mode.

# Deployment

- Frontend deployed to Vercel
- Backend includes a Procfile for Render.com
- Database is hosted on Neon.tech