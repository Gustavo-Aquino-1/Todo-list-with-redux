import styled from "styled-components";

const TodoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    input {
      padding: 10px;
      width: 25%;
      outline: none;
      border: none;
      border-bottom: 2px solid #27719f;
      background-color: #6a747832;
    }
  
    .Add_Task {
      width: 10%;
      border: none;
      padding: 10px;
      background-color:#27719f ;
      color: white;
      border-radius: 5px;
      font-weight: 600;
    }

    .Edit_Task {
      width: 10%;
      border: none;
      padding: 10px;
      background-color:#ab183d ;
      color: white;
      border-radius: 5px;
      font-weight: 600;
    }
  }

  .todo_area {
    width: 34%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div {
      margin: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        text-transform: capitalize;
      }
      .buttons {
        display: flex;
        flex-direction: row;
        gap: 10px;
        button {
          cursor: pointer;
          border: none;
          background-color: white;
          font-size: 18px;
          &:nth-child(1) {
            color: red;
          }
        }
      }
    }
  }
`;

export default TodoArea;