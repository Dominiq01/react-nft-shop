import classes from './SuccessModal.module.css';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SuccessModal = () => {
  return (
    <div className={classes.success}> 
      <h2>Success!</h2>
      <CheckCircleIcon className={classes.icon}/>
      <p>Enjoy your new NFT's.</p>
    </div>
  )
}

export default SuccessModal