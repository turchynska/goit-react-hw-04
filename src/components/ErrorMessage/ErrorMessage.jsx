import css from './ErrorMessage.module.css'

const ErrorMessage = ({error}) => <p className={css.error}>{error}</p>

export default ErrorMessage