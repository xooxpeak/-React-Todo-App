import TodoItem from './TodoItem';
import '../css/TodoList.css'

// 메인 컴포넌트에서 받아온 todo데이터와 ontoggle, onDel 함수를 map으로 TodoItem.js에 넘겨준다.
const TodoList = ({todo, onToggle, onDel}) => {

    return (
        // 할 일 목록을 나타냄
        <ul className='TodoList'>   

            {   // todo 배열을 매핑하여 각각의 할 일 항목을 TodoItem으로 렌더링
                // key : 각 항목을 구별하기 위한 고유한 식별자 -> item.id 사용
                todo.map(item => <TodoItem key={item.id} item={item} onToggle={onToggle} onDel={onDel}/>)
            }
        </ul>
    );
}

export default TodoList;