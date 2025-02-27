import { useState } from "react";
import { Trash, Plus } from "lucide-react";


export default function Todo() {
    const [todoValue, setTodoValue] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleAddTodo = (todo: string) => {
        if (todo.trim() === "") return;
        setTodos([...todos, todo]);
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
                    <li key={index}>{todo}  
                        <button onClick={() => handleDeleteTodo(index)}> <Trash /> </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}