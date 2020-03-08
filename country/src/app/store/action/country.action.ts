import { createAction, props } from '@ngrx/store'

export const countriesByRegion = createAction('[Country] findByRegion', props<{ region: string }>())
export const countriesByRegionLoaded = createAction('[Country] findByRegion loaded success', props<{ countries: Array<object> }>())
export const countriesByRegionError = createAction('[Country] findByRegion loaded error')