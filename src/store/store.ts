import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./countReducer";
import {settingsReducer} from "./settingsReducer";


const rootReducer = combineReducers({
    count: countReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type rootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store