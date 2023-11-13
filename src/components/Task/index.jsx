// Task.js

import { Container } from "./style.js";
import circulosemclique from '../../assets/circlenoclick.svg';
import trash from '../../assets/trash.svg';
import layer from '../../assets/Layer1.svg';

export function Task({ content, handleDeleteTodo, checked, index, handleCheckedTodo }) {

    function deleteComment() {
        handleDeleteTodo(content);
    }

    return (
        <Container className={checked ? 'checked' : ''}>
            <button onClick={() => handleCheckedTodo(index)}><img src={circulosemclique} alt="check"/><img src={layer}/></button>
            <p className={checked ? 'completed' : ''}>{content}</p>
            <button onClick={deleteComment}><img src={trash} alt="trash" /></button>
        </Container>
    );
}

