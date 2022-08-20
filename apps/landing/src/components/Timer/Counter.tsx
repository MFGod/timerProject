
interface CounterProps {
   time: number;
  color: string;
  className?: string;
 }



 export const Counter: React.FC<CounterProps> = ({
   time,
  color,
  className,
 }) => {

   const convertTimeToHHMMSS = (time: number) => {
      return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
    };
  
   return (
       <h2 color={color} className={className}> {convertTimeToHHMMSS(time)}</h2>
   );
 };
 