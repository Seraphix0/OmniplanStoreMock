import { createAction, props } from '@ngrx/store';
import { Schedule } from 'src/app/models/schedule';

export const addSchedule = createAction(
    '[Schedule] Add Schedule',
    props<{ schedule: Schedule }>()
  );

export const editSchedule = createAction(
    '[Schedule] Edit Schedule',
    props<{ schedule: Schedule }>()
);

export const removeSchedule = createAction(
    '[Schedule] Remove Schedule',
    props<{ scheduleId: number }>()
);

export const retrievedSchedules = createAction(
    '[Schedules/API] Retrieve Schedules Success',
    props<{ schedules: Schedule[] }>()
);