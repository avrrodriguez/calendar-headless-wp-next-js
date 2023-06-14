export default function GetCalendarMonthDays(month: String): Number {

  var daysOfTheMonth: Number = 0

  var thirtyOneDayMonths: String[] = ["january", "march", "may", "july", "august", "october", "december"]
  var thirtyDayMonths: String[] = ["april", "june", "september", "november"]
  
  switch (true) {
    case thirtyOneDayMonths.includes(month.toLowerCase()):
        daysOfTheMonth = 31
      break;

    case thirtyDayMonths.includes(month.toLowerCase()):
        daysOfTheMonth = 30
      break;

    default:
      daysOfTheMonth = 28;
  }

  return daysOfTheMonth
}