import React from 'react';

const TodoItem = ({item, onToggle, onDel}) => {
    const {id, text, check} = item   // item 객체에서 id, text, check 추출
    
    return (
        // check 값에 따라 클래스명을 동적으로 설정
        // check가 true이면 'on' 클래스를 추가하고, 그렇지 않으면 빈 문자열을 할당
        // 체크 박스를 클릭하면 onToggle 함수를 호출하여 해당 항목의 완료 여부를 토글
        // 할 일 텍스트를 강조 표시
        // 삭제 버튼을 클릭하면 onDel 함수를 호출하여 해당 항목을 삭제
        <li className={check ? `on` : ""}>  
            {/*<span onClick={() => onToggle(id)}> &#10003; </span> */}
            <input type="checkbox" checked={check} onChange={() => onToggle(id)} />
            <em>{text}</em>
            <button onClick={() => onDel(id)}> 삭제 </button>
        </li>
    );
};

export default TodoItem;