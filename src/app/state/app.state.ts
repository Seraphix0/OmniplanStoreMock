import { Availability } from './availability/availability';
import { Period } from '../models/period';
import { Schedule } from '../models/schedule';
import { User } from './user/user';

export interface AppState {
  user: User | undefined;
  schedules: ReadonlyArray<Schedule>;
  availability: ReadonlyArray<Availability>;
}
