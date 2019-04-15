import {connect} from 'react-redux';
import Message from '../../components/message/mesage'
import {getRoomsByUserId,getRoomByFromTo_action} from '../../redux/actions'
export default connect(
  state => ({user:state.user,rooms:state.rooms}),
  {getRoomsByUserId,getRoomByFromTo_action}
)(Message);
