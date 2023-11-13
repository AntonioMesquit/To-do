import { Container } from "./style.js"
import clip from '../../assets/Clipboard.svg'
export function NoTask(){
    return(
        <Container>
            <img src={clip}/>
            <p>Você ainda não tem tarefas cadastradas</p>
<p>Crie tarefas e organize seus itens a fazer</p>
        </Container>
        
    )
}