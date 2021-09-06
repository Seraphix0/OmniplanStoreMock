import { Availability } from '../availability/availability';
import { Schedule } from '../../models/schedule';

export class User {
    id: number | undefined;
    schedules: Schedule[] = [];
    availability: Availability[] = [];
}
