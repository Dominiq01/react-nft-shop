import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";


const Backdrop = ({onClose}) => {   
  return <div className={classes.backdrop} onClick={onClose}/>
}

const Overlay = ({children}) => {

  return (
    <div className={classes.modal}>
      <div className={classes.container}>{children}</div>
    </div>
  )
}
const Modal = ({children, onClose}) => {

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, document.getElementById('modal-root'))}
    </>
  )
};

export default Modal;