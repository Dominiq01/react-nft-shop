import classes from './Button.module.css';

const Button = ({children, className, onClick, type}) => {
  const btnClasses = `${classes.button} ${className}`
  return <button className={btnClasses} onClick={onClick} type={type}>{children}</button>
}

export default Button;