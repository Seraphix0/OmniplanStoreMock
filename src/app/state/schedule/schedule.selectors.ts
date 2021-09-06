import { createFeatureSelector } from '@ngrx/store';
import { scheduleFeatureKey } from './schedule.reducer';

import { Schedule } from 'src/app/models/schedule';

export const schedulesFeature = createFeatureSelector<ReadonlyArray<Schedule>>(scheduleFeatureKey);
