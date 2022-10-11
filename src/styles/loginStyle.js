import styled from "styled-components";

const LoginArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #7ba8ac;
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    min-width: 700px;
    width: 70%;
    display: flex;
    height: 700px;
    section {
      width: 70%;
      background-image: url('https://media.istockphoto.com/photos/abstract-network-background-picture-id1194228699?b=1&k=20&m=1194228699&s=612x612&w=0&h=1Z7yvN0VsILpiV425roCH1HSFL-k9op2meaRSlv9gUU=');
      background-size: cover;
      color: white;
      font-size: 30px;
      font-family: monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
    div {
      width: 30%;
      padding: 20px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;
      span {
        font-size: 50px;
        color: #27719f;
      }

      input {
        padding: 10px;
        border: none;
        border-bottom: 2px solid #27719f;
        outline: none;
        background-color: #6a74784e;
      }

      button {
        margin-top: 20px;
        padding: 10px 30px;
        background-color: #27719f;
        color: white;
        font-weight: 700;
        letter-spacing: 1px;
        border: none;
        &:disabled {
          opacity: 0.4;
        }
        &:not(:disabled) {
          opacity: 1;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default LoginArea;
