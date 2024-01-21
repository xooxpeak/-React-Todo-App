import React from "react";
import { useRef, useState } from 'react';
import '../css/Todos.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const no = useRef(0);   // 할 일(item)의 고유 id
    const [todo, setTodo] = useState([]);

    // < 삭제 >
    // 고유 id값을 받아 해당 item 삭제
    // setTodo 함수를 사용하여 todo 목록의 상태를 업데이트할건데
    // filter()를 사용하여 해당 item과 일치하지 않는 
    // todo 아이템만 포함된 새로운 배열을 생성
    const onDel = (id) => {
        setTodo(todo.filter(todo => todo.id !== id))
    }

    // < toggle >
    // 고유 id값을 받아 해당 item의 체크 상태를 설정
    // setTodo 함수를 사용하여 todo 목록의 상태를 업데이트할건데
    // map()을 사용하여 각각의 todo 아이템에 접근하고
    // 주어진 id에 해당하는 아이템을 찾아 check 속성을 토글
    // 나머지 아이템은 그대로 반환
    const onToggle = (id) => {
        setTodo(todo.map(item => item.id === id ? {...item, check : !item.check} : item))
    }

    // < 추가 >
    // setTodo 함수를 사용하여 todo 목록의 상태를 업데이트할건데
    // 이전 todo 목록을 복사하고
    // form에 입력받은 값을 새로운 todo 아이템으로 목록에 추가
    const onAdd = (text) => {
        setTodo([
            ...todo,   // 이전 todo 목록을 복사
            {
                id : no.current++,   // 새로운 id 부여
                text,   // 전달받은 text
                check : false   // 초기 check 속성을 false로 설정
            }
        ])
    }


    // TodoForm에는 onAdd함수만 넘겨주고
    // TodoList에는 todo객체와 토글, 삭제 함수를 넘겨준다.
    return (
        <div className="Todos">
            <h1>To Do List</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList todo={todo} onToggle={onToggle} onDel={onDel}/>
        </div>
    );

};

export default Todo;