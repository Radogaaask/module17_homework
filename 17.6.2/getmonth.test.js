import { getMonth } from "./getmonth.js";

// Тест для успешного выполнения
describe('getMonth', () => {
test('возвращает название месяца при правильном номере', () => {
expect(getMonth(6)).toBe('июнь');
expect(getMonth(9)).toBe('сентябрь');
});
});

// Тест для неуспешного выполнения
describe('getMonth', () => {
test('возвращает "Некорректный номер месяца" при неправильном номере', () => {
expect(getMonth("6")).toBe('Некорректный номер месяца');
expect(getMonth(13)).toBe('Некорректный номер месяца');
});
});

// Тест для граничного случая
describe('getMonth', () => {
test('возвращает название месяца для граничных значений', () => {
expect(getMonth(1)).toBe('январь');
expect(getMonth(12)).toBe('декабрь');
});
});
