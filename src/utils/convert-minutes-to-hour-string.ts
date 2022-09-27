
export function convertMinutesToHourString(minutesAmount: number) {

   const hours = Math.floor(minutesAmount / 60);
   const minutes = minutesAmount % 60;

   // return `${hours}:${minutes}`;
   //modifica para caso so tem um caractere, para trazer o 0 na frente
   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
