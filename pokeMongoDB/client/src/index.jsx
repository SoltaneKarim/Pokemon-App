import React from "react";
import ReactDOM from "react-dom";

import Pokedex from "./components/Pokedex.jsx"
import Pokedetails from "./components/Pokedetails.jsx"

/*
  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `App` component. 

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`. 
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'home'
  - If the view is set to 'pokedex', the `<Pokedex>` component is displayed
  - If the view is set to any other value, the `<Pokedetails>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  assessment. When you're ready, return to the README.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'pokedex'
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "pokedex") {
      return <Pokedex />;
    } else {
      return <Pokedetails />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('pokedex')}>
            PokeMongoDB
          </span>
          <span className={this.state.view === 'pokedex'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('pokedex')}>
            See all Pokemons
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
