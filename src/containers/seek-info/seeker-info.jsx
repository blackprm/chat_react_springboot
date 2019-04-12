import {connect} from 'react-redux';
import SeekerInfo from '../../components/seeker-info/seeker-info'
import {updateUserInfo} from '../../redux/actions'

export default connect(
  (state) => ({user:state.user}),
  {updateUserInfo}
)(SeekerInfo)
