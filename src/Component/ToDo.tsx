import { useState } from "react";

type Task = {
  id: number;
  detail: string;
};

const ToDo = () => {
  // Combine states into a single state object
  const [state, setState] = useState<{
    list: Task[];
    listDetail: string;
    editId: number | null;
    saveEdit: string;
  }>({
    list: [],
    listDetail: "",
    editId: null,
    saveEdit: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      listDetail: e.target.value,
    }));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.listDetail.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      detail: state.listDetail,
    };
    setState((prevState) => ({
      ...prevState,
      list: [...prevState.list, newTask],
      listDetail: "", // Clear input field
    }));
  };

  const removeTask = (id: number) => {
    setState((prevState) => ({
      ...prevState,
      list: prevState.list.filter((task) => task.id !== id),
    }));
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      saveEdit: e.target.value,
    }));
  };

  const handleEditChange = (id: number, currentDetail: string) => {
    setState((prevState) => ({
      ...prevState,
      editId: id,
      saveEdit: currentDetail,
    }));
  };

  const saveTask = (id: number) => {
    setState((prevState) => ({
      ...prevState,
      list: prevState.list.map((task) =>
        task.id === id ? { ...task, detail: state.saveEdit } : task
      ),
      editId: null, // Exit editing mode after saving
    }));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={state.listDetail}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {state.list.map((task) => (
          <li key={task.id}>
            {state.editId === task.id ? (
              <>
                <input
                  type="text"
                  value={state.saveEdit}
                  onChange={handleEditInputChange}
                />
                <button onClick={() => saveTask(task.id)}>Save</button>
              </>
            ) : (
              // Render task detail and buttons
              <>
                {task.detail}
                <button onClick={() => handleEditChange(task.id, task.detail)}>
                  Edit
                </button>
                <button onClick={() => removeTask(task.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
