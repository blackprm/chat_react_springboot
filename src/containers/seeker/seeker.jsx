import {connect} from 'react-redux';
import Seeker from "../../components/seeker/seeker";

export default connect(
  (state) => ({user:state.user})
)(Seeker);