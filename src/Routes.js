import React from "react";
import { Route } from "react-router-dom";

import Contacts from "./Contacts";
import AddContact from "./AddContact";
import ModifyContact from "./ModifyContact";
import Inscription from "./component/Inscription";
import Connection from "./component/Connection";
import HomePgae from "./HomePage";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/accueil" component={HomePgae} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/connection" component={Connection} />
        <Route
          exact
          path="/add-dancer"
          render={props => <AddDancer id={props} />}
        />
        <Route
          exact
          path="/modify-dancer/:id"
          render={props => <ModifyDancer id={props} />}
        />
      </div>
    );
  }
}
export default Routes;
