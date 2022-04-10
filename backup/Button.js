import PropTypes from  "prop-types";
import styles from "./Button.module.css";

function Button({text, onclick}){
    return <button onClick={onclick} className={styles.btn}> {text} </button>;
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;