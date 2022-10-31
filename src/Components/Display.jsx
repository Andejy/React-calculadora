import { useContext } from "react";
import { Context } from "../Context/Context";
import styled from "styled-components";
import "../CSS/index.css";

function Display() {
  const { display } = useContext(Context);
  const DIV = styled.div`
    margin-top: 30px;
    height: 10rem;
    width: 90%;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 20px;
    background-color: var(--PSBlues);
    display: flex;
    justify-content: flex-end;
    align-items: end;
  `;

  return (
    <DIV className="computer-display">
      <div className="display">
        <div className="input">
          <p>{display}</p>
        </div>
      </div>
    </DIV>
  );
}

export default Display;
