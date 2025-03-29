# Technical Context: foow - Task Management System

## Technology Stack

### Core Technologies

1. **Frontend**:

   - React 18 with TypeScript
   - React Router v6 for navigation
   - Supabase JS Client v2.39.8
   - Context API + useReducer for state

2. **Backend Services**:

   - Netlify Functions (Node.js 18)
   - Supabase PostgreSQL Database
   - Supabase Auth with Row Security
   - OpenAI GPT-4 API

3. **Dev Tools**:
   - ESLint + Prettier configured
   - Jest + React Testing Library
   - GitHub Actions CI/CD

## Environment Status

✅ Configured:

- REACT_APP_SUPABASE_URL
- REACT_APP_SUPABASE_ANON_KEY
- Supabase tables initialized

🟡 Pending:

- REACT_APP_OPENAI_API_KEY
- Netlify Functions deployment
- Final UI component library selection

## Project Structure

```bash
/client
├── src
│   ├── app/          # Core logic
│   ├── components/   # Reusable UI
│   ├── features/     # Feature modules
│   ├── lib/          # Utilities
│   └── types/        # Type definitions
/functions
└── src
    └── services/     # Serverless functions
```
