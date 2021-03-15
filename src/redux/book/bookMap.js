import { addBook, buyBook, setBook } from "../../redux/book/bookAction";

export const mapStateToProps = (state) => {
  return {
    numOfBooks: state.numOfBooks,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addBook: () => dispatch(addBook()),
    buyBook: () => dispatch(buyBook()),
    setBook: (qty) => dispatch(setBook(qty)),
  };
};
