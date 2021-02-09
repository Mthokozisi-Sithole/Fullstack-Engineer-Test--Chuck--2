import React, { memo } from "react";
import { connect } from "react-redux";

import JokeDetails from "./JokeDetails";
import Cart from "../../shared/components/Cart";
import Loader from "../../shared/components/Loader";
import Joke from "../../shared/types/joke";

interface Props {
  joke: Joke;
  currentCategory: string;
}
const Joker: React.FC<Props> = ({ joke, currentCategory }): JSX.Element => {
  return (
    <div className=" center jokerContenair">
      {joke ? (
        <Cart>
          <h4 className="jokeHeader">Joke about {currentCategory}</h4>
          <p className="mainParagraph">{joke.value}</p>
          <JokeDetails
            url={joke.url}
            created_at={joke.created_at}
            updated_at={joke.updated_at}
            icon_url={joke.icon_url}
          />
        </Cart>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state: { joke: Joke; currentCategory: string }) => ({
  joke: state.joke,
  currentCategory: state.currentCategory
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Joker));
