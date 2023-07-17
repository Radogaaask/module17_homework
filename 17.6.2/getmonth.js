export function getMonth(n) {
    let monthName;
    
    if (n === 1) {
    monthName = 'январь';
    } else if (n === 2) {
    monthName = 'февраль';
    } else if (n === 3) {
    monthName = 'март';
    } else if (n === 4) {
    monthName = 'апрель';
    } else if (n === 5) {
    monthName = 'май';
    } else if (n === 6) {
    monthName = 'июнь';
    } else if (n === 7) {
    monthName = 'июль';
    } else if (n === 8) {
    monthName = 'август';
    } else if (n === 9) {
    monthName = 'сентябрь';
    } else if (n === 10) {
    monthName = 'октябрь';
    } else if (n === 11) {
    monthName = 'ноябрь';
    } else if (n === 12) {
    monthName = 'декабрь';
    } else {
    monthName = 'Некорректный номер месяца';
    }
    
    return monthName;
    }
    