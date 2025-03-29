const App = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-background p-8"
      role="main"
      tabIndex={0}
      aria-label="Main application content"
    >
      <h1
        className="text-4xl font-bold text-primary hover:text-primary/90 transition-colors"
        aria-label="Application title"
      >
        Welcome to the ADHD Task Manager
      </h1>
    </div>
  );
};

export default App;
