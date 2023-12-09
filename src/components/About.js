import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>this is Namaste React webseries</h2>

        <UserClass name={"First"} location={"Virar classs"} />
      </div>
    );
  }
}

export default About;
