import {Container , Content} from './styles.js'
import foguete from '../assets/rocket.svg'
import { Task } from '../components/Task'
import plus from '../assets/plus.svg'
import { useEffect } from 'react'
export function App() {
const [tarefas, setTarefas] = useEffect([
  "Muito foda!",
  "Muito foda!",
])

  return (
   <Container>
    <header>
      <img src={foguete}/>
      <p>to<span>do</span></p>
    </header>
    <Content>
      <div className="alinhar">
      <form>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button>Criar <img src={plus} /></button>
      </form>
      <div className="todo">
        <div className="top-todo">
          <div className="left">
            <p>Tarefas criadas</p>
            <p>5</p>
          </div>
          <div className="right">
          <p>Concluídas</p>
          <p><span>2</span> de <span>5</span></p>

          </div>
        </div>
      </div>
       <div className="tasks">
       {
        tarefas.map(tarefa => {
          return <Task/>
        })
       }
     
       </div>

      </div>
    </Content>

    
   </Container>
  )
}


