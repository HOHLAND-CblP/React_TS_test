import React, { FC, useState, useEffect } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchTodo()
    }, [])

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/'+ id)
            setTodo(response.data)
        } catch (e) {
            alert(e);
        }
    }


    return (
        <div>
            <button onClick={() => navigate('/todos')}>Back</button>
            <h1>Задача {todo?.title}</h1>
            <div>
                Задача {todo?.completed === true ? "выполнена" : "не выпонена"} 
            </div>
        </div>
    )
}

export default TodoItemPage;