import { createAction, props } from '@ngrx/store';
import { Availability } from './availability';

export const addAvailability = createAction(
  '[Availability] Add Availability',
  props<{ userId: number, periodId: number }>()
);

export const removeAvailability = createAction(
    '[Availability] Edit Availability',
    props<{ userId: number, periodId: number }>()
);

export const retrievedAvailabilityList = createAction(
    '[Availability List/API] Retrieve Availability Success',
    props<{ availability: Availability[] }>()
);
