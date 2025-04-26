import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";


//selectore => whaterver the data (updated data) have in the state it will sent it to the component.

export const selectCounterState = (state:AppState) => state.counter;


//selector 
    export const selectCount = createSelector(selectCounterState,
        (state)=>state.count// this count will be shown in the component 
    )