import {connect} from 'react-redux';
import Boss from "../../components/boss/boss";
import {authSuccess,getList} from '../../redux/actions'


export default connect(
  (state) => ({user:state.user,userList:state.userList}),
  {authSuccess,getList}
)(Boss);