import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'

const Home = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
        // .then((response) => {
        //     console.log(response.data)
        // })
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }


    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Todo List</h2>
            <Create />
            <br />
            {
                todos.length > 0 ?

                    todos.map(todo => (
                        <div key={todo.id} className='task' style={{ background: "purple", cursor: 'pointer' }}>
                            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                {todo.done ? <BsFillCheckCircleFill></BsFillCheckCircleFill>
                                    :
                                    <BsCircleFill className='icon' />
                                }

                                <h1>{todo.task}</h1>
                            </div>
                            <div>
                                <span>
                                    <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} />
                                </span>
                            </div>
                        </div>

                    ))
                    :
                    <div><h2>No Record</h2></div>
            }
            ihugyftdr
        </div>
    )
}

export default Home