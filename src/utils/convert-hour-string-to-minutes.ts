
export function convertHourStringToMinutes(hourString: string) {

   const [hour, minutes] = hourString.split(":").map(Number)

   const minutesAmout = (hour * 60) + minutes;

   return minutesAmout;
}