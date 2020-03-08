import { createReducer, on, Action } from '@ngrx/store';
import { countriesByRegion, countriesByRegionLoaded } from './../action/country.action'
/**
 * Country reducer to transform the state based of the action type and the input data
 * 
 * @author Jayakumar Jayaraman
 */

// Intialise state 
const initialState = {
}

// Creates Reducer
const _reducer = createReducer(
    initialState,
    on(countriesByRegion, (state, region) => ({ ...state, region })),
    on(countriesByRegionLoaded, (state, countries) => (countries['payload']))
)

export function countryReducer(state, action: Action) {
    return _reducer(state, action)
}