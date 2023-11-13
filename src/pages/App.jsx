import {Container , Content} from './styles.js'
import foguete from '../assets/rocket.svg'
import { Task } from '../components/Task'
import plus from '../assets/plus.svg'
import { useState } from 'react'
export function App() {
  const [tarefas, setTarefas] = useState([

  ])
  const [novaTarefa, setNotaTarefa] = useState("")

  
  function handleNewTodo(){
   setNotaTarefa(event.target.value);
    
  }
  function handleNewSubmit(event) {
    event.preventDefault();
  
    if (!novaTarefa) {
      return alert("Preencha o campo para enviar uma task");
    }
  
    const novaTarefaObj = {
      content: novaTarefa,
      checked: false,
    };
  
    setTarefas([...tarefas, novaTarefaObj]);
    setNotaTarefa('');
    console.log(novaTarefaObj);
  }
  function deleteComment(content){
    const commentsDeleteOne = tarefas.filter(tarefa => {
        return tarefa !== content


        //remover apenas o 
    })
    setTarefas(commentsDeleteOne)

}

  return (
   <Container>
    <header>
      <img src={foguete}/>
      <p>to<span>do</span></p>
    </header>
    <Content>
      <div className="alinhar">
      <form>
        <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleNewTodo}/>
        <button onClick={(event) => handleNewSubmit(event)}>Criar <img src={plus} /></button>
      </form>
      <div className="todo">
        <div className="top-todo">
          <div className="left">
            <p>Tarefas criadas</p>
            <p>{tarefas.length}</p>
          </div>
          <div className="right">
          <p>Concluídas</p>
          <p><span>2</span> de <span>{tarefas.length}</span></p>

          </div>
        </div>
      </div>
      <div className="tasks">
  {tarefas.map((tarefa, index) => {
    return <Task content={tarefa.content} handleDeleteTodo={deleteComment} key={index} />;
  })}
</div>


      </div>
    </Content>

    
   </Container>
  )
}


