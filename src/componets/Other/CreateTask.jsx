
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask({ data }) {

  const [userData, setUserData] = useContext(AuthContext)

  const [tasktitle, setTaskTitle] = useState("T");
  const [taskdescription, setTaskDescription] = useState("");
  const [taskdate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  // const submitHandler = (e) => {


  //   e.preventDefault();

  //    setNewTask ( {
  //     taskdate,
  //     taskdescription,
  //     tasktitle,
  //     category,
  //     active: false,
  //     new: true,
  //     failed: false,
  //     completed: false
  //   })



  //   const data = userData

  //   data.forEach((elem) => {
  //     if (asignTo === elem.firstName) {
  //       elem.tasks.push(newTask);
  //       elem.taskCounts.new = elem.taskCounts.newTasks+1
  //     }
  //   });

  //   setUserData(data)
  //    console.log(data)


  //   // Reset form fields properly
  //   setAsignTo("");
  //   setCategory("");
  //   setTaskDate("");
  //   setTaskDescription("");
  //   setTaskTitle("");
  // };

  //   const submitHandler = (e) => {
  //     e.preventDefault();

  //     // Create a new task object
  //     const task = {
  //       taskdate,
  //       taskdescription,
  //       tasktitle,
  //       category,
  //       active: false,
  //       new: true,
  //       failed: false,
  //       completed: false
  //     };

  //     // Update state in a functional way
  //     setNewTask(task); // No need to use `newTask` immediately

  //     setUserData(prevUserData => {
  //       return prevUserData.map(user => {
  //         if (user.firstName === asignTo) {
  //           return {
  //             ...user,
  //             tasks: [...user.tasks, task], // Properly update tasks
  //             taskCounts: { ...user.taskCounts, new: user.taskCounts.new + 1 }
  //           };
  //         }
  //         return user;
  //       });
  //     });
  //     console.log(userData)
  //     // Reset form fields properly
  //     setAsignTo("");
  //     setCategory("");
  //     setTaskDate("");
  //     setTaskDescription("");
  //     setTaskTitle("");
  // };


  const handleLogin = (e) => {
    e.preventDefault();

    // Task object create karo
    const newTask = {
      taskdate,
      taskdescription,
      tasktitle,
      category,
      active: false,
      new: true,
      failed: false,
      completed: false
    };

    // `userData` ka naya copy banao taake direct mutation na ho
    const updatedUserData = userData.map(user => {
      if (user.firstName === asignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask], // Properly tasks ko update karo
          taskCounts: {
            ...user.taskCounts,
            newTasks: (user.taskCounts.newTasks || 0) + 1
          }
        };
      }
      return user;
    });

    // Updated state ko set karo
    setUserData(updatedUserData);
    console.log("Updated User Data:", updatedUserData);

    // Reset form fields
    setAsignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={tasktitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make A UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskdate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, dev, etc."
            />
          </div>
        </div>

        <div className="w-2/4 flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskdescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
