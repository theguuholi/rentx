import { eachDayOfInterval, endOfDay, endOfMonth, format, startOfDay, startOfMonth } from "date-fns";
import { DayProps, MarkedDateProps } from ".";
import { getPlatformDate } from "../../utils/getPlatformDate";
import theme from "../../styles/theme";

export function generateInterval(start: DayProps, end: DayProps) {
    let interval: MarkedDateProps = {};

    eachDayOfInterval({
        start: startOfDay(new Date(start.timestamp)),
        end: endOfDay(new Date(end.timestamp)),
    }).forEach((day) => {
        const date = format(getPlatformDate(day), 'yyyy-MM-dd');
        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date ? theme.colors.main : theme.colors.main_light,
                textColor: start.dateString === date || end.dateString === date ? theme.colors.main_light : theme.colors.main,
            }
        }
    })

    return interval;
}