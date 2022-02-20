import {ResponseTime} from '../../index';
import Kit, {DateInputTypes, DayId, smartDate} from 'javascript-dev-kit';
import WorkTimes from '../models/users/WorkTimes';

const generateUUID = () => {
    return Kit.generateUUID();
};

const createResponsiveDaysText = (responseDays: {},lang = 'fa'): string=>{
    if(!responseDays || responseDays === ''){
        return '';
    }
    let text = '';
    Object.keys(responseDays).forEach((day)=>{
        const array:ResponseTime[] = responseDays[day];
        array.forEach((responseTime)=>{
            const dayText = dayNumberToString(day,lang);
            text = text.concat(dayText+' => '+responseTime.from.hour+':'+responseTime.from.minute+' - '+responseTime.to.hour+':'+responseTime.to.minute +'\n');
        })
    });
    return text;
};

const dayNumberToString = (day: string,lang = 'fa'): string => {
    switch (day) {
        case '0':
            return lang === 'fa' ? 'یکشنبه' : lang === 'en' ? 'Sunday': 'azar günü';
        case '1':
            return lang === 'fa' ? 'دوشنبه' : lang === 'en' ?  'Monday' : 'bazar ertəsi';
        case '2':
            return lang === 'fa' ? 'سه شنبه' : lang === 'en' ?  'Tuesday' : 'çərşənbə axşamı';
        case '3':
            return lang === 'fa' ? 'چهارشنبه' : lang === 'en' ?  'Wednesday' : 'çərşənbə';
        case '4':
            return lang === 'fa' ? 'پنجشنبه' : lang === 'en' ?  'Thursday' : 'cümə axşamı';
        case '5':
            return lang === 'fa' ? 'جمعه' : lang === 'en' ?  'Friday' : 'cümə';
        case '6':
            return lang === 'fa' ? 'شنبه' : lang === 'en' ?  'Saturday' : 'şənbə';
        default:
            return '';
    }
};

const isReserveValid = (request:{from: number,to: number},workTimes: WorkTimes,reserved: {from: number,to: number}[]): boolean=>{
    const smd = smartDate(request.from);
    const ymd = smd.toYMD();
    if(request.from < smartDate().getTime()){
        return false;
    }
    if (Kit.datesRangesConflict(request, reserved, 60 * 1000)) {
        return false;
    }
    return workTimes[smd.dayName()].find((workTime)=>{
        if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(ymd)) {
            return false;
        }
        return smartDate(ymd+' '+workTime.from).getTime() <= request.from && smartDate(ymd+' '+workTime.to).getTime() >= request.to;
    }) !== undefined;
};

const calculateWorkTimeIntervals = (fromTime: DateInputTypes, toTime: DateInputTypes, reserved: {from: number,to: number}[], workTimes: WorkTimes, gapMinutes: number) => {
    const minimumDate = smartDate(fromTime).getTime();
    const maximumDate = smartDate(toTime).getTime();
    const gapMillis = gapMinutes * 60 * 1000;
    const now = smartDate(fromTime);
    const options: string[] = [];
    while (now.getTime() < maximumDate) {
        const nowDateString = now.formatGregorian('YYYY/MM/DD');
        const todayWorkTimes = workTimes[now.dayName()];

        todayWorkTimes.forEach((workTime) => {
            if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(now.formatGregorian('jYYYY/jMM/jDD'))) {
                return;
            }
            const workTimeBeginning = smartDate(nowDateString+' '+workTime.from);
            const workTimeEnd = smartDate(nowDateString+' '+workTime.to);
            let timeIndex = workTimeBeginning.getTime();
            while (timeIndex + gapMillis <= workTimeEnd.getTime() && timeIndex + gapMillis <= maximumDate) {
                if (timeIndex >= minimumDate && !Kit.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMillis }, reserved, 60 * 1000)) {
                    options.push(smartDate(timeIndex).toHM() + ' - ' + smartDate(timeIndex + gapMillis).toHM());
                }
                timeIndex += gapMillis;
            }
        });
        now.add(1, 'day').toBeginningOfDay();
    }
    return options;
};

export default {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText,
    calculateWorkTimeIntervals,
    isReserveValid
};
