import {connect} from 'react-redux';
import Message from '../../components/message/mesage'
import {getRoomsByUserId} from '../../redux/actions'
export default connect(
  state => ({rooms:state.rooms}),
  {getRoomsByUserId}
)(Message);
