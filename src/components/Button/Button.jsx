
import styles from './Button.module.css';

const Button = ({ isOutline, icon, text }) => {
    // const { isOutline, icon, text } = props;
  return (
    <div>
      <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
      </button>
    </div>
  )
}

export default Button;
