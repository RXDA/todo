import React, {useState} from 'react'
import './index.css'

type FooterProps = {
    done: number,
    all: number,
}

const Footer = (props: FooterProps) => {
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox"/>
            </label>
            <span>
					<span>已完成 {props.done}</span> / 全部 {props.all}
				</span>
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
export default Footer
