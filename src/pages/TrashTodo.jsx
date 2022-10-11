import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCleanTrash, actionRemoveTaskTrash, actionRecicleItem } from '../store/actions'
import styled from 'styled-components'
import Header from '../components/Header';
import { FaTrash } from 'react-icons/fa';
import { MdRestore } from 'react-icons/md';

const TrashArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    letter-spacing: 1px;
    color: #27719f;
  }
  .task_area {
    margin-top: 30px;
    width: 34%;
  }

  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #65606054;
    margin: 10px;
    .buttons {
      display: flex;
      align-items: center;
      button {
        border: none;
        cursor: pointer;
        font-size: 17px;
        background: white;
        color: red;
        &:nth-child(1) {
          font-size: 20px;
          color: #27719f;
        }
      }
    }
  }

  .clean {
    background-color: #27719f;
    display: block;
    margin: auto;
    margin-top: 70px;
    padding: 10px;
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;


const TrashTodo = ({ trash, cleanTrash, recicleTask, removeTaskTrash }) => {
  return (
    <>
      <Header />
      <TrashArea>
        <h2>Trash</h2>
        <div className='task_area'>
          {
            trash.map((e) => (
              <div className='task' key={e.id}>
                <p>{e.task}</p>
                <div className='buttons'>
                  <button
                    onClick={() => recicleTask(e)}
                    >
                    <MdRestore />
                  </button>

                  <button
                    onClick={ () => removeTaskTrash(e) }
                    >
                      <FaTrash />
                  </button>
                </div>
              </div>
            ))
          }
          <button className='clean' onClick={ cleanTrash }>Clean Trash</button>
        </div>
      </TrashArea>
     </>
  )
}

const mapStateToProps = ({ todoReducer }) => ({
  trash: todoReducer.trash,
})

const mapDispatchToProps = (dispatch) => ({
  recicleTask: (task) => dispatch(actionRecicleItem(task)),
  cleanTrash: () => dispatch(actionCleanTrash()),
  removeTaskTrash: (task) => dispatch(actionRemoveTaskTrash(task)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(TrashTodo);
