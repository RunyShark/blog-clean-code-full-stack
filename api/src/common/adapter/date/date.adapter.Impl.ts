import moment from 'moment';
import { DateAdapterDomain } from './date.adapter.domain';

export class DateAdapterImpl implements DateAdapterDomain {
  constructor(private readonly formatterDate: typeof moment) {}

  DMY(date: Date): string {
    return this.formatterDate(date).format('DD/MM/YYYY');
  }
}
