# Core Requirements for the MVP

## **Core Features to Include in the MVP**

The following features are essential to deliver a functional Minimum Viable Product (MVP) for the ADHD-focused task management system:

### **Task Processing**

1. **Task Creation and Decomposition**:
    - Allow users to create tasks with a title and optional description.
    - Use an external AI service (e.g., OpenAI GPT API) to decompose complex tasks into manageable subtasks (1–15 minutes).
2. **Manual Task Prioritization**:
    - Enable users to manually assign priority levels (e.g., low, medium, high) to tasks.
    - Provide sorting functionality based on priority and deadlines.
3. **Deadline Tracking**:
    - Allow users to set deadlines for tasks.
    - Display tasks in a timeline or list view sorted by urgency.

### **Focus Sustainment**

4. **Basic Task Display**:
    - Show only the current or next task in a distraction-free interface to reduce overwhelm.
    - Include a "completed" button to mark tasks as done.
5. **Work/Break Timer**:
    - Provide a manual timer feature for users to set work and break intervals (e.g., 25 minutes work, 5 minutes break).

### **Memory Support**

6. **Task Storage**:
    - Use Supabase as the backend database to store tasks, subtasks, priorities, and deadlines securely.
    - Ensure real-time updates across devices using Supabase's real-time capabilities.
7. **Authentication**:
    - Implement user authentication using Supabase Auth for secure multi-device access.

### **Backend Logic**

8. **Serverless Backend**:
    - Use Netlify serverless functions to handle backend logic, including task creation, decomposition (via AI API), and database interactions.

---

## **When Is the MVP Done?**

The MVP is considered complete when the following criteria are met:

1. Users can create, view, and prioritize tasks.
2. Tasks can be decomposed into subtasks using an external AI API.
3. Deadlines can be added and sorted visually.
4. A distraction-free interface shows only one task at a time.
5. Basic authentication allows users to log in and access their tasks securely across devices.
6. The backend supports task storage and retrieval with real-time updates via Supabase.
7. The application is deployed and accessible on Netlify with working serverless functions.

---

## **Features Explicitly Excluded from the MVP**

The following features are excluded from the MVP to maintain focus on simplicity and rapid delivery:

1. **Advanced AI Features**:
    - Context-aware chunking based on energy levels or historical performance data.
    - Reinforcement learning for dynamic task prioritization.
2. **Complex Focus Management**:
    - Hyperfocus detection or interruption mechanisms.
    - Active window monitoring for focus protection.
3. **Advanced UI Enhancements**:
    - Kinetic progress visualizations (e.g., particle effects near deadlines).
    - Adaptive UI modes (e.g., high-contrast mode for low energy states).
4. **Integration with External Tools**:
    - Native Outlook/Teams integration for automatic task extraction.
    - File/document contextual recall features.
5. **Offline Functionality**:
    - Offline task management is deferred until future iterations.
6. **Reward Systems or Gamification**:
    - Micro-rewards or completion-based incentives are not included in this release.
7. **Biometric Features**:
    - Webcam attention tracking or AR workspace projection is excluded.

---

## Why Focus on These Core Features?

1. **Simplicity**: The chosen features address core ADHD challenges (task initiation, prioritization, and focus sustainment) without overcomplicating the system.
2. **Rapid Development**: By excluding advanced AI and integrations, development time is reduced, ensuring faster delivery of a functional product.
3. **Scalability**: The architecture (Netlify + Supabase) allows easy expansion in future iterations when additional features are added.
4. **User Validation**: These features provide enough functionality to gather meaningful feedback from ADHD users, which will guide future improvements.