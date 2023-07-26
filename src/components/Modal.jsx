import { useNavigate } from "react-router-dom";
import style from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className={style.backdrop} onClick={closeHandler}></div>
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
