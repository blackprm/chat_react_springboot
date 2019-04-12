import { connect } from 'react-redux';
import { login, clearMessage,initUser} from '../../redux/actions';
import Login from '../../components/login/login'
export default connect(
  (state) => ({ user: state.user }),
  { login, clearMessage,initUser }
)(Login)