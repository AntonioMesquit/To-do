import { Container, Content } from './styles.js'
import foguete from '../assets/rocket.svg'
import { Task } from '../components/Task'
import plus from '../assets/plus.svg'
import { NoTask } from '../components/NoTask/index.jsx'
import { useState } from 'react'
export function App() {
  const [tarefas, setTarefas] = useState([
  ]);
  const [novaTarefa, setNotaTarefa] = useState("");

  function handleNewTodo() {
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
    console.log(novaTarefaObj)
    setTarefas([...tarefas, novaTarefaObj]);
    setNotaTarefa('');
  }

  function deleteComment(content) {
    const commentsDeleteOne = tarefas.filter(tarefa => {
      return tarefa.content !== content;
    });
    setTarefas(commentsDeleteOne);
  }

  function handleMarkTodo(index) {
    const updatedTarefas = [...tarefas];
    updatedTarefas[index].checked = !updatedTarefas[index].checked;
    setTarefas(updatedTarefas);
  }

  return (
    <Container>
      <header>
        <img src={foguete} alt="rocket" />
        <p>to<span>do</span></p>
      </header>
      <Content>
        <div className="alinhar">
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleNewTodo} />
            <button onClick={(event) => handleNewSubmit(event)}>Criar <img src={plus} alt="plus" /> </button>
          </form>
          <div className="todo">
            <div className="top-todo">
              <div className="left">
                <p>Tarefas criadas</p>
                <p>{tarefas.length}</p>
              </div>
              <div className="right">
                <p>Concluídas</p>
                <p><span>{tarefas.filter(tarefa => tarefa.checked).length}</span> de <span>{tarefas.length}</span></p>
              </div>
            </div>
          </div>
          <div className="tasks">
            {(!tarefas || tarefas.length === 0) && <NoTask />}
            {tarefas && tarefas.map((tarefa, index) => (
              <Task
                content={tarefa.content}
                handleDeleteTodo={deleteComment}
                checked={tarefa.checked}
                index={index}
                handleCheckedTodo={handleMarkTodo}
                key={index}
              />
            ))}

          </div>
        </div>
      </Content>
    </Container>
  );
}
