import { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducer/todoReducer";

const TodosPage: React.FC = () => {
  console.log("1. Program Started");
  const todoItemStyle = {
    width: "72%",
    display: "inline-block"
  };

  // to read todo input data -- let's use useRef
  const todoInput = useRef<HTMLInputElement>(null);
  console.log(todoInput);

  const [todoState, todosDispatch] = useReducer(todoReducer, []);
  console.log(todoState);

  useEffect(() => {
    todosDispatch({
      type: "GET_TODOS",
      payload: [
        {
          id: "123456",
          task: "my todo 1",
          isCompleted: false
        },
        {
          id: "o987654",
          task: "my todo 2",
          isCompleted: false
        }
      ]
    });
  }, []);

  const handleAddTodo = () => {
    if (todoInput.current !== null) {
      const todo = {
        id: new Date().toString(),
        task: todoInput.current.value,
        isCompleted: false
      };
      console.log(todo);
      todosDispatch({
        type: "ADD_TODO",
        payload: todo
      });
    }
  };

  console.log("2. Program Ended");
  return (
    <div className="row">
      <h1>Todos</h1>

      <div className="col-md-6 offset-md-3">
        <p>Listing Todos</p>
        <div className="input-group mb-3">
          {/* Let's try uncontrolled component */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            ref={todoInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            ADD
          </button>
        </div>

        <ul className="list-group">
          {todoState &&
            todoState.map((todo) => {
              return (
                <li className="list-group-item" key={todo.id}>
                  <span style={todoItemStyle}>{todo.task}</span>
                  <span className="text-end">
                    <button className="btn btn-sm btn-dark">Edit</button>{" "}
                    <button className="btn btn-sm btn-dark">Delete</button>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;