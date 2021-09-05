import React from 'react'
import {nanoid} from 'nanoid'
import './index.css'
import {ListItem} from "../Item";

type HeaderPros = {
    addTodo: (item: ListItem) => void,
}

const Header = (props: HeaderPros) => {
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") {
            const item: ListItem = {
                id: nanoid(),
                name: event.currentTarget.value,
                done: false,
            }
            props.addTodo(item)
        }
    }

    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp}/>
        </div>
    )
}

export default Header

