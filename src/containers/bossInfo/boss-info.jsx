import {connect} from 'react-redux'
import BossInfo from "../../components/boss-info/boss-info"
import {updateUserInfo} from '../../redux/actions'
export default connect(
  (state) => ({user:state.user}),
  {updateUserInfo}
)(BossInfo)
