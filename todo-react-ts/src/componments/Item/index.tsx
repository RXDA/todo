import React, {useState} from "react";

export type ListItem = {
    id: string,
    name: string,
    done: boolean,
}


type ItemProp = ListItem & {
    deleteTodo: (ids: string[]) => void,
    updateTodo: (items: Map<string, ListItem>) => void,
}

const Item = (item: ItemProp) => {
    const [mouseIn, setMouseIn] = useState<boolean>(false);
    //鼠标移入、移出的回调
    const handleMouseE = (e: React.MouseEvent<HTMLLIElement>) => {
        if (e.type == 'mouseleave') {
            setMouseIn(false)
        } else if (e.type == 'mouseenter') {
            setMouseIn(true)
        }
    };

    const handleMouse = (inFlag: boolean) => {
        return (e: React.MouseEvent<HTMLLIElement>) => {
            setMouseIn(inFlag)
        };
    }

    //勾选、取消勾选某一个todo的回调
    const handleCheckE = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.)
    }
    const handleCheck = (id: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            const nt = {...item}
            nt.done = e.currentTarget.checked
            let itemMap = new Map<string, ListItem>([
                [id, nt],
            ]);
            item.updateTodo(itemMap);
        }
    }
    //
    // //删除一个todo的回调
    const handleDelete = (id: string) => {
        return (e: React.MouseEvent<HTMLButtonElement>) => {
            if (window.confirm('确定删除吗？')) {
                item.deleteTodo([id])
            }
        }
    }
    // 对比handleDelete, 不需要event时，可以写为() => handleDelete2(item.id)
    const handleDelete2 = (id: string) => {
        if (window.confirm('确定删除吗？')) {
            item.deleteTodo([id])
        }
    }


    return (
        <li style={{backgroundColor: mouseIn ? "lightgray" : "white"}} onMouseLeave={handleMouse(false)}
            onMouseEnter={handleMouse(true)}>
            <label>
                <input type="checkbox" defaultChecked={item.done} onChange={handleCheck(item.id)}/>
            </label>
            {item.name}
            <button className="btn btn-danger" style={{display: mouseIn ? 'inline' : 'none'}}
                    onClick={() => handleDelete2(item.id)}>删除
            </button>
        </li>
    )
}

export default Item
