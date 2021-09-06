import { Period } from './period';

export class Schedule {
    id: number | undefined;
    confirmed = false;
    periods: Period[] = [];
    composerId!: number;
}
