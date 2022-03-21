import Toggle from "./components/common/ThemeToggle";

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen">
      <Toggle />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;