import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef("");
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY" });
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btnn"
          onClick={increment}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btnn"
          onClick={decrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          placeholder="Enter a number"
          type="text"
          className="number-input"
          ref={inputElement}
        ></input>
        <button type="button" className="btn btn-info btnn" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btnn"
          onClick={handleSubtract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
