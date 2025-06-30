import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import theme from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { ptBr } from './localeConfig';
import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (day: DayProps) => void;
}

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const headerStyle = {
    backgroundColor: theme.colors.background_secondary,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.text_detail,
    paddingBottom: 10,
    marginBottom: 10,
  };

  return (
    <CustomCalendar
      testID='calendar'
      renderArrow={direction => {
        return (
          <Feather
            name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
            size={24}
            color={theme.colors.text}
          />
        );
      }}
      headerStyle={headerStyle}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        textMonthFontSize: 20,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toISOString().split('T')[0]}
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, generateInterval };
export type { DayProps, MarkedDateProps };
