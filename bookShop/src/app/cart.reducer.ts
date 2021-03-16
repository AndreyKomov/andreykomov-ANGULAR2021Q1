import { createReducer, on } from '@ngrx/store';
import { plusDollar } from './cart.actions';

export const initialState: any[] = [1];

const _cartReducer = createReducer(
  initialState,
  on(plusDollar, (state) => {
    const zz = state.concat([10]);
    return zz;
  }),
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
