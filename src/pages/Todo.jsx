import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {
  actionAddTask, actionEditTask, actionChnageEditor,
  actionRemoveTask
} from '../store/actions'
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import TodoArea from '../styles/todoStyles';


const Todo = ({ tasks, editor, idToEdit, addTask, removeTask, editTask, changeEditor, email, password }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    const id = tasks.length === 0 ? 0 : +tasks[tasks.length - 1].id + 1;
    const taskObj = { task, id };
    addTask(taskObj);
    setTask('');
  }

  const handleEditTask = () => {
    const arrFilter = tasks.filter((e) => e.id !== idToEdit);
    const newObj = { task, id: idToEdit };
    editTask([...arrFilter, newObj]);
    changeEditor(0);
    setTask('');
  }

  return (
    <div>
      {
        !password.length > 0 ? (
          <div>
            <p>Apenas usuarios logados tem acesso a essa página!</p>
            <Link to="/">Logar</Link>
          </div>
        ): (
          <div>
            <Header />
            <TodoArea>
              <section>
                <input
                  type="text"
                  value={task}
                  onChange={({ target: { value } }) => setTask(value)}
                />

                {
                  !editor ? (
                    <button
                      onClick={handleAddTask}
                      className='Add_Task'
                    >
                      Add Task
                    </button>
                  ) : (
                    <button
                      className='Edit_Task'
                      onClick={handleEditTask}
                    >
                      Edit Task
                    </button>
                  )
                }
              </section>

              <article className='todo_area'>
                {
                  tasks.sort((a, b) => +a.id - +b.id).map((e) => (
                    <div key={e.id}>
                      <h4>{e.task}</h4>
                      <article className='buttons'>
                        <button onClick={() => removeTask(e)}><FaTrash /></button>
                        <button onClick={() => changeEditor(e.id)}><FiEdit /></button>
                      </article>
                    </div>
                  ))
                }
              </article>
            </TodoArea>
        </div>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ todoReducer, loginReducer }) => ({
  ...todoReducer,
  email: loginReducer.email,
  password: loginReducer.password,
})

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(actionAddTask(task)),
  removeTask: (task) => dispatch(actionRemoveTask(task)),
  editTask: (todo) => dispatch(actionEditTask(todo)),
  changeEditor: (id) => dispatch(actionChnageEditor(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
