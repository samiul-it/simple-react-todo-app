import React, { useEffect, useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const url = `http://localhost:5000/tasks`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setTasks(data));
    }, []);

    return (
      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <h6>
              Task name: {task.title} : Task Desc. {task.completed}{" "}
              <button>X</button>
            </h6>
          </div>
        ))}
      </div>
    );
};

export default Tasks;