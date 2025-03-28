# Technical Context: foow - Task Management System

## Technology Stack

### Core Technologies
1. **Frontend**:
   - React (TypeScript template)
   - React Router for navigation
   - Supabase client library
   - Context API for state management

2. **Backend Services**:
   - Netlify Serverless Functions
   - Supabase PostgreSQL database
   - Supabase Auth for authentication
   - OpenAI GPT API for task decomposition

3. **Development Tools**:
   - Create React App for project scaffolding
   - ESLint + Prettier for code quality
   - Jest for testing
   - GitHub for version control

## Development Setup

### Prerequisites
1. **Node.js** (v16+ recommended)
2. **npm** or **yarn** for package management
3. **Git** for version control
4. **Supabase account** for database
5. **OpenAI API key** for AI features

### Configuration
1. **Environment Variables**:
   - `REACT_APP_SUPABASE_URL`
   - `REACT_APP_SUPABASE_ANON_KEY`
   - `REACT_APP_OPENAI_API_KEY`
   - `REACT_APP_NETLIFY_FUNCTIONS_URL`

2. **Project Structure**:
   ```
   /src
     /components
     /hooks
     /services
     /types
     /utils
   /functions
     /src
       /services
   ```

## Technical Constraints

1. **Performance**:
   - Must handle real-time updates efficiently
   - Need responsive UI for ADHD users
   - Optimize for mobile and desktop

2. **Security**:
   - Row-level security in Supabase
   - JWT validation for API calls
   - Secure storage of API keys

3. **Limitations**:
   - No offline functionality in MVP
   - AI features require internet connection
   - Real-time sync depends on Supabase availability

## Dependencies

### Key Packages
1. **Frontend**:
   - `@supabase/supabase-js`
   - `react-router-dom`
   - `date-fns` for date handling

2. **Serverless Functions**:
   - `openai` package
   - `@supabase/supabase-js`

3. **Testing**:
   - `@testing-library/react`
   - `jest`
   - `msw` for API mocking
