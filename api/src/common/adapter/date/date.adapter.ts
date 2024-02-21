import moment from 'moment';
import { DateAdapterImpl } from './date.adapter.Impl';

moment.locale('es');
export const date = new DateAdapterImpl(moment);
