import {connect} from 'react-redux'
import {register,initUser} from '../../redux/actions';
import Register from '../../components/register/register'

export default connect(
  
  (state) => ({user:state.user}),
  {register,initUser}
)(Register)