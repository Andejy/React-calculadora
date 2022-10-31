import clsx from "clsx";
import { useContext } from "react";
import { Context } from "../Context/Context";

const Button = (props) => {
  const { getOperator } = useContext(Context);
  return (
    <div
      className={clsx(
        getOperator(props.children) && "btn-operator",
        typeof props.children === "string" && "btn",
      )}
      onClick={() => props.clickFuntion(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
