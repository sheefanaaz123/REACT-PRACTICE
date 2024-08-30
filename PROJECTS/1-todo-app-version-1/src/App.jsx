import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />

      <AddToDo />
      <div className="items-container">
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">4/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger d1">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">Go to School</div>
          <div class="col-4">5/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger d2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
