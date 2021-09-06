import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromSchedule from './schedule.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromSchedule.scheduleFeatureKey, fromSchedule.scheduleReducer)
  ],
})
export class ScheduleModule {}
