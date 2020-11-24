import * as screens from 'constants/screens';
import Home from 'screens/Home';
import Calendar from 'screens/Calendar';

export const Routes = [
  {
    key: 1,
    screen: screens.HOME,
    component: Home,
  },
  {
    key: 2,
    screen: screens.CALENDAR,
    component: Calendar,
  },
];
