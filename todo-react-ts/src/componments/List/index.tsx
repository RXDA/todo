import React, {Component} from 'react'
import Item, {ListItem} from '../Item'
import './index.css'


export type ListItems = {
    todos: ListItem[],
}

type ListProps = ListItems & {
    deleteTodo: (ids: string[]) => void,
    updateTodo: (items: Map<string, ListItem>) => void,
}

const List = (list: ListProps) => {
    return (
        <ul className="todo-main">
            {
                list.todos.map(t => <Item key={t.id} done={t.done} name={t.name} id={t.id}
                                          deleteTodo={list.deleteTodo} updateTodo={list.updateTodo}/>)
            }
        </ul>
    )
}

export default List
