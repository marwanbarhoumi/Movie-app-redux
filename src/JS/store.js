import { createStore } from "redux";
import { moviesreducer } from "./reducer/moviereducer";
 const devtools=   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 export const store = createStore(
    moviesreducer, devtools
  );