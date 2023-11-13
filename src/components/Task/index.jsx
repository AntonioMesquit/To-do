import { Container } from "./style.js";
import circulosemclique from '../../assets/circlenoclick.svg'
import trash from '../../assets/trash.svg'
export function Task({content , handleDeleteTodo}){
    function deleteComment(){
        handleDeleteTodo(content)
    }
return(
    <Container>
    <button><img src={circulosemclique}/></button>
    <p>{content}</p>
    <button onClick={deleteComment}><img src={trash}/></button>
    
</Container>
)
}