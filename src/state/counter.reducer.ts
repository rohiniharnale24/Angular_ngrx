import { createReducer, on } from '@ngrx/store';
import { decreament, increament, reset } from './counter.action';


//reducer => as soon as the action triggers it will update the state . 
// reducer interface
export interface counterState {
  count: number;
}

// initial state
export const initialCounterState: counterState = {
  count: 0
};

// create reducer
export const counterReducer = createReducer(
  initialCounterState,
  on(increament, (state): counterState => ({ ...state,count: state.count + 1})),
  on(decreament, (state): counterState => ({ ...state,count: state.count - 1})),    
  on(reset, (state): counterState => ({ ...state,count: 0}))

);
