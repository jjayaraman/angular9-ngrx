import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, mergeMap, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs';
import { CountryService } from './../../service/country.service';

/**
 * CountryEffects to call the APIs
 *  
 * @author Jayakumar Jayaraman
 */
@Injectable()
export class CountryEffects {

    countries$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Country] findByRegion'),
            withLatestFrom(
                this.store.pipe(select('regions')),
                this.store.pipe(select('countries'))
            ),
            mergeMap(action =>
                this.countryService.getCountriesByRegion(action['region'])
                    .pipe(
                        map(countries => {
                            return { type: '[Country] findByRegion loaded success', payload: countries }
                        })
                        , catchError(() => of({ type: '[Country] findByRegion loaded error' }))
                    )
            )
        )
    )

    constructor(
        private countryService: CountryService,
        private actions$: Actions,
        private store: Store<{ regions: Array<object>, countries: Array<object> }>) {
    }

}

