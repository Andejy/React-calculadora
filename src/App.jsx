import { useContext } from "react";
import { Context } from "./Context/Context";
import Button from "./Components/Button";
import ClearBtn from "./Components/ClearBtn";
import Display from "./Components/Display";
import "./CSS/index.css";

function App() {
  const { getInputs, deleteInput, calculator, clearDisplay } = useContext(Context);

  return (
    <>
      <div className="calculators-container">
        <Display />
        <div className="rows">
          <Button clickFuntion={getInputs}>7</Button>
          <Button clickFuntion={getInputs}>8</Button>
          <Button clickFuntion={getInputs}>9</Button>
          <Button clickFuntion={getInputs}>/</Button>
        </div>
        <div className="rows1">
          <Button clickFuntion={getInputs}>4</Button>
          <Button clickFuntion={getInputs}>5</Button>
          <Button clickFuntion={getInputs}>6</Button>
          <Button clickFuntion={getInputs}>*</Button>
        </div>
        <div className="rows2">
          <Button clickFuntion={getInputs}>1</Button>
          <Button clickFuntion={getInputs}>2</Button>
          <Button clickFuntion={getInputs}>3</Button>
          <Button clickFuntion={getInputs}>-</Button>
        </div>
        <div className="rows3">
          <Button clickFuntion={getInputs}>0</Button>
          <Button clickFuntion={getInputs}>.</Button>
          <Button clickFuntion={calculator}>=</Button>
          <Button clickFuntion={getInputs}>+</Button>
        </div>
        <div className="rows">
          <ClearBtn clickFuntion={clearDisplay}>C</ClearBtn>\
          <ClearBtn clickFuntion={deleteInput}>{"<="}</ClearBtn>
        </div>
      </div>
    </>
  );
}
export default App;
