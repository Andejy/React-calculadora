import styled from "styled-components";
import "../CSS/index.css";
function ClearBtn(props) {
  const ClearBtn = styled.div`
    width: 10.6rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    background-color: #000;
    margin-top: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--PSBlues);
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ;
    }
  `;
  return <ClearBtn onClick={() => props.clickFuntion(props.children)}>{props.children}</ClearBtn>;
}

export default ClearBtn;
