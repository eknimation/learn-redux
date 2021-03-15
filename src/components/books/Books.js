import { connect } from "react-redux";

import Buttons from "./Buttons";
import { mapStateToProps } from "../../redux/book/bookMap";

const Books = (props) => {
  return (
    <div>
      <h2>Number of books - {props.numOfBooks}</h2>
      <Buttons />
    </div>
  );
};

export default connect(mapStateToProps)(Books);
