import React from "react";
import { useRef, useState } from 'react';
import '../css/TodoForm.css';

const TodoForm = ({onAdd}) => {
    const textRef = useRef('')   // 입력 후, 입력 필드에 focus()를 호출하기 위함
    const [text, setText] = useState('')   // 입력 필드의 값을 state(상태)로 관리

    const changeInput = (e) => {   // 입력된 텍스트 값을 state에 업데이트
        const {value} = e.target
        setText(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()   // submit 후 새로고침 방지

        if(!text) return   // 입력값이 없으면 실행되지 않음

        // 입력값이 있는 경우
        onAdd(text)   // onAdd 함수를 호출하여 상위 컴포넌트로 새로운 할 일을 추가
        setText('')   // input란을 다시 공란으로 -> 입력 필드 초기화
        textRef.current.focus()   // useRef를 사용하여 input란에 자동 포커스 설정
    }

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} ref={textRef} placeholder="할 일을 입력해주세요"/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;
