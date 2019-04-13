import {connect} from 'react-redux';
import Seeker from "../../components/seeker/seeker";
import {getList} from '../../redux/actions'
export default connect(
  (state) => ({user:state.user,userList:state.userList}),
  {getList}
)(Seeker);