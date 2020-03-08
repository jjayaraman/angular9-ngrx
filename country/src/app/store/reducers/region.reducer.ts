import { createReducer, on, Action } from "@ngrx/store";
import { list } from "../action/region.action";

/**
 * Reducer for Regions. It just hold a static data for the Regions dropdown.
 * 
 * @author Jayakumar Jayaraman
 */

// For Regions drop down - hard coded state
const initialState = [
    { 'label': 'Asia', 'value': 'asia' },
    { 'label': 'Europe', 'value': 'europe' }
]

// Creates the reducer
const _regionReducer = createReducer(
    initialState,
    on(list, state => [...state]),
);

export function regionReducer(state, action: Action) {
    return _regionReducer(state, action);
}