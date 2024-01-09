import { configureStore } from "@reduxjs/toolkit";
import greetingReducer, {fetchGreeting, selectGreeting} from './messages/messageSlice'

const store = configureStore({
    reducer:{
        greeting: greetingReducer,
    }
});

export {fetchGreeting, selectGreeting};

export default store