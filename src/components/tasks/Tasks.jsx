import React from 'react'
import { useState, useEffect } from 'react';
import Task from '../task/Task';
import styles from './Tasks.module.css'
import axios from 'axios'

const Tasks = () => {
    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks/')
            .then((res) => {
                // console.log(res.data)
                setTasks(res.data)
            })
            .catch((err) => {
                console.log('Error from Task List')
            })
    }, [])

    const onSubmit = () => {
        let task = { title: input, done: false, delete: false }
        axios.post('http://localhost:8000/api/tasks', task)
            .then(res => {
                console.log(res)
                setInput('')
                setTasks([...tasks, res.data])
            })
            .catch(err => {
                console.log(err)
            })
        console.log(task)
    }

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onDeleteClick = (id) => {
        axios.delete('http://localhost:8000/api/tasks/' + id)
            .then(res => {
                setTasks(tasks.filter(t => t._id !== id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const doneTask = (id) => {
        axios.get('http://localhost:8000/api/tasks/done/' + id)
            .then(res => {
                setTasks(tasks.map((task) => {
                    return task._id === id ? { ...task, done: res.data.done } : task
                }))
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <section className={`${styles.sec_tasks} container`}>
            <div className={styles.add_toDo}>
                <input onChange={onChange}
                    value={input}
                    type="text"
                    placeholder='Введите текст' />
                <div onClick={onSubmit} className={styles.btn}>
                    Add
                </div>
            </div>
            <div className={`${styles.preview_tasks}`}>
                {tasks.length !== 0
                    ? tasks.map((task, index) => <Task _id={task._id} done={task.done} doneFunc={doneTask} remove={onDeleteClick} key={task._id} title={task.title} index={index} />)
                    : <h1 className={styles.massage}>Список Пуст!</h1>
                }
                { }
            </div>
        </section>
    );
};
export default Tasks