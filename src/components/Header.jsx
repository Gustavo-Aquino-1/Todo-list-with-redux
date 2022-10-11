import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcTodoList } from 'react-icons/fc';
import { FaTrashAlt } from 'react-icons/fa';

const HeaderArea = styled.div`
    background-color: #27719f;
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:120px;
    margin-bottom: 70px;
    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
    }

    div {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      span {
        font-size: 20px;
        &:nth-child(2) {
          color: white;
          font-size: 17px;
        }
      }
  }
`;

const Header = () => {
  return (
    <HeaderArea>
      <div>
        <span><FcTodoList /></span> 
        <Link to="/todo">Todo List</Link>
      </div>

      <div>
        <Link to="/trash">Trash</Link>
        <span><FaTrashAlt /></span>
      </div>
    </HeaderArea>
  )
}

export default Header;
