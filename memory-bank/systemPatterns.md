# System Patterns: foow Architecture

## Core Architecture

```mermaid
graph TD
    A[React Frontend] --> B[Custom Hooks]
    B --> C[State Management]
    A --> D[Component Library]
    C --> E[Redux Store]
    E --> F[Tasks Slice]
    E --> G[Timer Slice]
    F --> H[Supabase Sync]
    G --> I[Local Storage]
    H --> J[Netlify Functions]
    J --> K[OpenAI API]
    J --> L[Supabase]

## Key Design Patterns

1. **State Management**
   - Redux Toolkit for global state
   - RTK Query for API calls
   - Local storage persistence middleware

2. **Component Structure**
   - Atomic design pattern
   - Container/presentational separation
   - Compound components for UI flexibility

3. **Error Handling**
   - Global error boundary
   - Toast error notifications
   - Automatic error logging (Sentry integration)

## Resolved Pattern Decisions
1. **Task Decomposition Location**
   - Server-side processing via Netlify Functions
   - Benefits: Centralized business logic, better security for API keys
   - Client handles only UI/UX aspects

2. **Sync Frequency**
   - Immediate sync after task modifications
   - Background sync every 15 minutes for reliability

3. **Error Recovery**
   - Retry failed syncs with exponential backoff
   - Local storage fallback for offline changes

## Security Patterns
- JWT authentication flow
- Row-level security in Supabase
- API key encryption in Netlify environment variables
```
