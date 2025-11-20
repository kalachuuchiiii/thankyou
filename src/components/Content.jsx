import cat from '/cat3.gif';
import star from '/star83.gif';
import bread from '/bread8.gif';
import bear from '/bear14.gif';
import bunny from '/bunny60.gif'


export const Content = () => {
  return (
    <div className="min-h-screen last w-full relative pt-20 flex  items-center justify-center gap-2 flex-col coffee text-coffee">
      <img
        src={bread}
        className="absolute size-20 md:size-60 top-46 right-90 -rotate-20 "
      />
      <img
        src={bear}
        className="absolute size-30 md:size-80  top-200 right-40 "
      />
      <img
        src={bunny}
        className="absolute size-40 md:size-90 bottom-130  right-110 "
      />
      <div className="max-w-6xl space-y-15  text-left mr-auto pl-10">
        <p>
          when we, Sir Josh, Ms. Riza, and Jimuel, sat at the table to share a
          meal, I really felt loved. it's like we're a family, i'm not sureee
        </p>
        <p>
          i love being with all of you so much that i even started enjoying
          waking up in the morning.
        </p>
        <p>
          if it's possible po for me na ma-extend ang time ko here, i probably
          would have already done so, because that is how special i feel being
          treated here. even though i always respond with “okay naman po” each
          time i’m asked if we’re okay, this experience would not have been
          complete without Sir Joeven syempre. I really enjoy how our mix of
          personalities makes everything fun.
        </p>
        <p>
          aside from that, i gained a lot more confidence talking with people,
          because we were there dealing with a lot of people, and greeting them
          every time feels like the new norm. this helped me not only understand
          what to expect in a job, but also improve my character.
        </p>
        <p>
          i am really glad to have been deployed in the principal's office,
          because if not, I would not have felt this great.
        </p>
        <p>
          thank you for the time we all spent together, and if i can, i will
          give a visit sometimes.
        </p>
        <p>
          Thank you po, Ms. Riza, Sir Josh, and Sir Joeven, hanggang sa muli
          pooo !!<span className="flicker">_</span>
        </p>
      </div>
      <div className="my-30">
        <div></div>
        <div className="flex gap-20 items-center ">
          <img src={cat} className="size-50 mb-20" />
          <img src={star} className="size-50 mb-20" />
          <p className=" right-20 text-9xl bottom-20">THANK YOU</p>
        </div>
      </div>
    </div>
  );
};
