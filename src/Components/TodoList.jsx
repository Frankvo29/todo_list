import React, { useState } from 'react';
import './TodoList.css';

// create a To-do app that support multiple groups
// Each group will have a heading and a list of tasks

const TodoList = () => {
  const [group, setGroup] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [taskInputs, setTaskInputs] = useState({});

  const handleAddGroup = () => {
    if (headingInput.trim() !== "") {
      setGroup([...group, {heading: headingInput, tasks: [] }]);
      setHeadingInput('');
    }
  };

  const handleDeleteGroup = (index) => {
    const newGroup = [...group];
    newGroup.splice(index, 1);
    setGroup(newGroup);
  };

  const handleAddTask = (index) => {
    if (taskInputs[index].trim() !== '') {
        const newGroup = [...group];
        newGroup[index].tasks.push(taskInputs[index]);
        setGroup(newGroup);
        setTaskInputs({ ...taskInputs, [index]: '' });
    }
  };

  const handleTaskInputChange = (index, value) => {
    setTaskInputs({ ...taskInputs, [index]: value });
  };

  return (
    <>
      <div className="create-group-container">
        <h1 className="title">My Todo List</h1>
        <div className="heading-input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Create a group"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />
          <button onClick={handleAddGroup} className="add-group-button">Add Group</button>
        </div>
      </div>
      <div className="todo_main">
        {group.map((item, index) => (
          <div key={index} className="todo-group">

            <div className="heading_todo">
              <h3>{item.heading}</h3>
              <button className="delete-group-button" onClick={() => handleDeleteGroup(index)}>Delete Group</button>
            </div>
            <ul>
             {item.tasks.map((task, taskIndex) => (
               <li key={taskIndex} className="todo_task">
                <p>{task}</p>
               </li>
             ))}
           </ul>
            <div className="add_task">
              <input
                type="text"
                className="task-input"
                placeholder="Add task"
                value={taskInputs[index] || ""}
                onChange={(e) => handleTaskInputChange(index, e.target.value)}
              />
              <button className="add-task-button" onClick={() => handleAddTask(index)}>Add task</button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
