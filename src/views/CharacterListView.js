import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    // return something here to indicate that you are fetching data
    return (
      <div>
        {this.props.fetching && <div>{this.props.error}</div>}
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  };
};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getData
  }
)(CharacterListView);
