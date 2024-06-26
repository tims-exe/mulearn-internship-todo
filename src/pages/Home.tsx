import React, { ChangeEvent, TableHTMLAttributes, useEffect, useState } from 'react'
import { useLocalStorage } from './LocalStorage';
import './styles.css'
import Tasks from './Components/Tasks';

const Home = () => {
  const { getItem, setItem, removeItem } = useLocalStorage('value');
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTaskReq, setNewTaskReq] = useState<boolean>(false);

  useEffect(() => {
    if (newTaskReq) {
        setItem(todoList);
        setNewTaskReq(false);
    }
  }, [newTaskReq, todoList])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
    console.log(task)
  };

  const addTask = () => {
    setTodoList([...todoList, task]);
    setTask("");
    setNewTaskReq(true);
  }

  return (
    <div>
        <p className='header'>TODO</p>
        <div className="new-task">
            <input type="checkbox" />
            <input 
                type="text" 
                placeholder='New task' 
                name='title' 
                value={task} 
                onChange={handleChange}
                className='input-task'
            />
        </div>
        <div className='main-task'>
            <Tasks title="test"/>
        </div>
        
        {/* <button onClick={addTask}>Add Task</button>
        <button onClick={() => console.log(getItem())}>Get Task</button>
        <button onClick={() => removeItem()}>Remove Task</button> */}
    </div>
  )
}

export default Home



  //const [deadline, setDeadline] = useState<number>(0)
  //const currentDate: Date = new Date()

  /* interface Task {
    title: string;
    date: Date | null;
  }

  const [task, setTask] = useState<Task>({
    title: "",
    date: null,
  }) */