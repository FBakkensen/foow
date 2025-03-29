# Technical Context: foow Stack Details

## Core Dependencies

```json
{
  "frontend": {
    "react": "^18.2.0",
    "redux": "^4.2.1",
    "supabase": "^2.39.8",
    "date-fns": "^2.30.0"
  },
  "services": {
    "netlify": {
      "functions": "^1.4.0",
      "identity": "^1.9.2"
    },
    "openai": "^4.24.1"
  }
}
```

## Architecture Decisions

1. **Server-Side Processing**

   - All business logic in Netlify Functions
   - API keys stored in encrypted environment variables
   - Client only handles UI rendering and user interactions

2. **Supabase Integration**
   - Row-level security enabled for all tables
   - Real-time subscriptions for task updates
   - Database triggers for automatic timestamps

## Development Setup

1. **Netlify Functions**
   ```ts
   // decompose-task.ts
   export const handler = async (event) => {
     const { task } = JSON.parse(event.body);
     const completion = await openai.chat.completions.create({
       model: "gpt-4-turbo",
       messages: [
         {
           role: "system",
           content: "Decompose this task into 5-7 subtasks...",
         },
       ],
     });
     return {
       statusCode: 200,
       body: JSON.stringify(completion.choices[0].message.content),
     };
   };
   ```

## Updated Technical Debt

1. Added error handling for AI API calls
2. Implemented session refresh logic
3. Created indexes on Supabase task tables
