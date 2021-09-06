import { createReducer, on } from '@ngrx/store';
import { Schedule } from 'src/app/models/schedule';
import * as ScheduleActions from './schedule.actions';

export const scheduleFeatureKey = 'schedule';

export const initialState: ReadonlyArray<Schedule> = [];

export const scheduleReducer = createReducer(
    initialState,
    on(ScheduleActions.addSchedule, (state, { schedule }) => addSchedule(state, schedule)),
    on(ScheduleActions.editSchedule, (state, { schedule }) => editSchedule(state, schedule)),
    on(ScheduleActions.removeSchedule, (state, { scheduleId }) => state.filter(p => p.id !== scheduleId )),
);

function addSchedule(state: ReadonlyArray<Schedule>, schedule: Schedule): ReadonlyArray<Schedule> {
    if (state.indexOf(schedule) > -1) {
        return state;
    }

    return [...state, schedule];
}

function editSchedule(state: ReadonlyArray<Schedule>, schedule: Schedule): ReadonlyArray<Schedule> {
    const index = state.indexOf(schedule);

    if (index < 0) {
        /// TODO: Handle missing schedule.
        return state;
    }

    const newState = [...state];
    newState[index] = schedule;

    return newState;
}
