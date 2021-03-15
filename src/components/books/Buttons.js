import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/book/bookMap";

const Buttons = (props) => {
  return (
    <div>
      <button onClick={() => props.addBook()}>Add book</button>
      <button onClick={() => props.buyBook()}>Buy book</button>
      <button onClick={() => props.setBook(20)}>Set book to 20</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
