import React, { memo } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { changeCategory } from "../../store/actions";
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";

import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/actions/types";
import { bindActionCreators } from "redux";

interface Props extends StateProps, DispatchProps {
  category: string;
  refetch: (category: { category: string }) => any;
}

const Category: React.FC<Props> = ({
  category,
  refetch,
  changeCategory,
  currentCategory
}): JSX.Element => (
  <li
    className={`center ${currentCategory === category && "a"}`}
    onClick={() => {
      refetch({ category });
      changeCategory(category);
    }}
  >
    <span style={{ margin: "0 .4rem" }}>{category}</span>
    {currentCategory === category && <FaCheckCircle size={14} />}
  </li>
);

interface StateProps {
  currentCategory: string;
}
interface DispatchProps {
  changeCategory: (category: string) => void;
}
const mapStateToProps = (state: AppState, ownProps: any): StateProps => ({
  currentCategory: state.currentCategory
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): DispatchProps => ({
  changeCategory: bindActionCreators(changeCategory, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Category));
