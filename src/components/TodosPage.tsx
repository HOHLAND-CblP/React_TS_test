import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import List from "./List";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const navigate = useNavigate()
 
    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e);
        }
      }
    
    return (
        <List 
            items={todos} 
            renderItem={(todo: ITodo) => <TodoItem onClick={(todo: ITodo) => navigate("/todos/" + todo.id)} todo={todo} key={todo.id}/>}
        />
    )
} 

export default TodosPage;