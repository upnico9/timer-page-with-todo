import { useState, useEffect } from "react";
import { Trash, Plus } from "lucide-react";

interface TodoItem {
    id: number;
    text: string;
}

export default function Todo() {
    const [todoValue, setTodoValue] = useState<string>("");
    const [todos, setTodos] = useState<TodoItem[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (todo: string) => {
        if (todo.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: todo }]);
        setTodoValue("");
    }

    const handleDeleteTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    
    return (
        <div className="todo-container">
            <h2>Ideas or stuffs to do</h2>
            <div className="input-container">
                <input type="text" onChange={(e) => setTodoValue(e.target.value)} />
                <button onClick={() => handleAddTodo(todoValue)}> <Plus /> </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={todo.id}>{todo.text}  
                        <button onClick={() => handleDeleteTodo(index)}> <Trash /> </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}