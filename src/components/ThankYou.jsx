import thankone from '/thanks1.gif';
import thanktwo from '/thanks3.gif';
import star from '/star98.gif';
import star2 from '/star20.gif';
import thank3 from '/thanks2.gif';


export const ThankYou = () => {

    return (
      <div className="min-h-screen relative coffee  gap-6 text-coffee w-full flex items-center justify-center flex-col">
        <img src={star} className="absolute right-20 bottom-20 size-20" />
        <img src={star2} className="absolute left-20 top-20 size-20" />
        <img src={thankone} className="h-40" />

        <img src={thanktwo} className="h-40" />
        <img src={thank3} className="h-40" />
      
      </div>
    );
}