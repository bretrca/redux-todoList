import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import DoneList from "./components/DoneList";
import DeletedList from "./components/DeletedList";

function App() {
  return (
    <div className="App container  p-4 mt-5">
      <h1>TODO LIST</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
      <DoneList />
      <DeletedList />
    </div>
  );
}

export default App;
