import { combineReducers } from 'redux';
import Booksreducer from './reducer_books'

const rootReducer = combineReducers({
  books: Booksreducer
});

export default rootReducer;
