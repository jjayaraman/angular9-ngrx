import { createReducer, on, Action } from "@ngrx/store";
import { list } from "../action/region.action";


// For Regions drop down - hard coded state
const initialState = [
    { 'label': 'Asia', 'value': 'asia' },
    { 'label': 'Europe', 'value': 'europe' }
]

const _regionReducer = createReducer(
    initialState,
    on(list, state => [...state]),
);

export function regionReducer(state, action: Action) {
    return _regionReducer(state, action);
}