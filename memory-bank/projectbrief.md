# Project Brief: foow - Task Management System MVP

## Core Purpose
A task management system specifically designed for individuals with ADHD, focusing on:
- Task decomposition into manageable subtasks
- Distraction-free interface
- Simple prioritization and deadline tracking
- Focus sustainment tools

## Key Features (MVP)
1. **Task Processing**
   - Task creation with AI-powered decomposition (1-15 minute subtasks)
   - Manual priority assignment (low/medium/high)
   - Deadline tracking with urgency sorting

2. **Focus Sustainment**
   - Single-task focused view
   - Work/break timer functionality

3. **Memory Support**
   - Secure task storage with Supabase
   - Multi-device access via authentication

4. **Technical Architecture**
   - React frontend
   - Netlify serverless functions
   - Supabase database
   - OpenAI API integration

## Excluded Features (Post-MVP)
- Advanced AI features (context-aware chunking, reinforcement learning)
- Complex focus management (hyperfocus detection, window monitoring)
- Advanced UI enhancements (kinetic visualizations, adaptive modes)
- External tool integrations
- Offline functionality
- Reward systems/gamification
- Biometric features

## Success Criteria
MVP is complete when:
1. Users can create, view, and prioritize tasks
2. AI decomposition of tasks is functional
3. Deadline tracking works with visual sorting
4. Distraction-free interface is implemented
5. Authentication works across devices
6. Backend supports real-time updates
7. Application is deployed on Netlify

## Technical Stack
```mermaid
graph TD
    A[React Frontend] -->|API Calls| B[Netlify Serverless Functions]
    B -->|Database Queries| C[Supabase]
    B -->|Task Decomposition| D[OpenAI GPT API]
    A -->|Authentication| C
