import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import theme from '../../styles/theme';
import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje',
}

LocaleConfig.defaultLocale = 'pt-br';

const Calendar = () => {
    return (
        <CustomCalendar
            testID="calendar"
            renderArrow={(direction) => {
                return <Feather name={direction === 'left' ? 'chevron-left' : 'chevron-right'} size={24} color={theme.colors.text} />
            }}
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10,
            }}
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
        />
    )
}

export default Calendar;