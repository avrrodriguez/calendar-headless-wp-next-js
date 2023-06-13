export default function GetCalendarMonthDays(month: String): Number {
  var daysOfTheMonth: Number

  var thirtyOneDayMonths: String[] = ["january", "march", "may", "july", "august", "october", "december"]
  var thirtyDayMonths: String[] = ["april", "june", "september", "november"]
  
  switch (month) {
    case thirtyOneDayMonths.includes?(month):
        daysOfTheMonth = 31:
      break;

    case thirtyDayMonths.includes?(month):
        daysOfTheMonth = 30:
      break;

    default:
      daysOfTheMonth = 28;
  }

  return daysOfTheMonth
}