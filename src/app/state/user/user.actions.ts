import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const authenticatedUser = createAction(
    '[Users/API] Authenticate User Success',
    props<{ userId: number }>()
);
