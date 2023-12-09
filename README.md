Two types of Export/Import

-Default Export/Import

export default component;
import component from "path";

- Named Export/Import

export const name;
import {name} from ""path;

# React Hooks

(Normal Js utility functions)

- useState() - superpowerful state variables in React
- useEffect() -

whenever a state variable update react will re render the component

whenever state variables update react triggers a reconciliation cycle(re-renders the component)

why react is fast
-> this react react fibre , the new reconciliation algorithm which finds out the difference between two virtual dom and updates the dom
only when required and the portion of the dom which is required that is why react is fast.

- 2 types of Routing

- client Side Routing
- server side routing

- functional component - it is a normal javascript function which returns some piece of jsx.
- class component - class based component is a class which extends React.Component and it has a render method which returns some  
  piece of jsx.
