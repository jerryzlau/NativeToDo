import {connect} from 'react-redux';
import TodoIndexItem from './todo_index_item';
import {deleteTodo} from '../../actions/todo_actions';

const mapStateToProps = ({state}) => {
  return{

  };
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoIndexItem);