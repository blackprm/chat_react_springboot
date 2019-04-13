import { connect } from 'react-redux';
import UserCenter from '../../components/user-center/user-center';
import {refreshUser} from '../../redux/actions'
export default connect(
  state => ({user:state.user}),
  {refreshUser}
)(UserCenter);