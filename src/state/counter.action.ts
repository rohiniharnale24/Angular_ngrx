import { createAction} from '@ngrx/store'

export const increament = createAction('[ Counter Component ] Increament');
export const decreament = createAction('[ Counter Component ] decreament');
export const reset = createAction('[ Counter Component ] reset');