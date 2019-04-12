import {connect} from 'react-redux'
import {register} from '../../redux/actions';
import Register from '../../components/register/register'

export default connect(
  (state) => ({user:state.user}),
  {register}
)(Register)