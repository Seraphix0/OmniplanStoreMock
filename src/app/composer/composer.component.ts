import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Period } from '../models/period';
import { Schedule } from '../models/schedule';
import { addSchedule, editSchedule, removeSchedule } from '../state/schedule/schedule.actions';
import { schedulesFeature } from '../state/schedule/schedule.selectors';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent {
  schedules$: Observable<ReadonlyArray<Schedule>>;

  constructor(private store: Store) {
    this.schedules$ = this.store.pipe(select(schedulesFeature));
  }

  onAdd(schedule: Schedule): void {
    this.store.dispatch(addSchedule({ schedule }));
  }

  onEdit(schedule: Schedule): void {
    this.store.dispatch(editSchedule({ schedule }));
  }

  onRemove(scheduleId: number): void {
    this.store.dispatch(removeSchedule({ scheduleId }));
  }
}
