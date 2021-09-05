import React, {useState} from 'react'
import './App.css'
import List, {ListItems} from "./componments/List";
import Footer from "./componments/Footer";
import Header from "./componments/Header";
import {ListItem} from "./componments/Item";


const App = () => {
    let initState: ListItems = {
        todos: [
            {id: "1", name: "吃饭", done: false},
            {id: "2", name: "睡觉", done: false},
            {id: "3", name: "打代码", done: false},
        ]
    };
    const [todos, setTodos] = useState<ListItems>(initState);

    const doneNum = initState.todos.filter(t => t.done).length
    const all = initState.todos.length

    const [sum, setSum] = useState<number[]>([doneNum, all])

    const addTodo = (item: ListItem) => {
        setTodos({todos: [item, ...todos.todos]})
        setSum([sum[0], sum[1] + 1])
    }

    const deleteTodo = (ids: string[]) => {
        const newTodo = todos.todos.filter(t => !ids.includes(t.id))
        setTodos({todos: newTodo})
        setSum([sum[0]-1, sum[1] - 1])
    }

    const updateTodo = (items: Map<string, ListItem>) => {
        todos.todos.forEach(t => {
            if (items.has(t.id)) {
                const nt = items.get(t.id)!
                t.name = nt.name
                t.done = nt.done
            }
        })
        setTodos({todos: todos.todos})
        const doneNum = todos.todos.filter(t=>t.done).length
        setSum([doneNum, sum[1]])
    }

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={addTodo}/>
                <List todos={todos.todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                <Footer done={sum[0]} all={sum[1]}/>
            </div>
        </div>
    )
}

export default App
