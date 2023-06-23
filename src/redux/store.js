import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import gameReducer from "./gameReducer";

// const myStore=createStore(counterReducer)
// const myStory=createStore(gameReducer)

const rootReducer=combineReducers({
    counter:counterReducer,
    game:gameReducer
})
const myStory=createStore(rootReducer)

export default myStory