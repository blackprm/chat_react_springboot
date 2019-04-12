import {connect} from 'react-redux';
import Boss from "../../components/boss/boss";



export default connect(
  (state) => ({user:state.user})
)(Boss);