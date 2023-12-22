import "./styles.css";

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input typ e="text" id="item" />
        </div>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label htmlFor="item1">
            <input type="checkbox" id="item1" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label htmlFor="item2">
            <input type="checkbox" id="item2" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
