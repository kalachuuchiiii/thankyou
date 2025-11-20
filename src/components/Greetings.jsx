

import welcome from '/welcome10.gif';
import chick from '/chick3.gif';
import frog from '/frog16.gif';
import bat from '/bat3.gif';

import star from '/star2.gif';

export const Greetings = () => {

    return (
      <div className="min-h-screen bg-stars  w-full text-coffee relative">
       
        <img src={star} className="size-50 absolute -right-20 md:right-25" />
        <h1 className=" mx-auto p-10 w-10/12 gap-2 items-center  justify-start flex">
          <span className="flex gap-2 items-center">
            {" "}
            Ms. Riza <img src={chick} className="size-10" />,
          </span>
          <span className="flex gap-2 items-center">
            {" "}
            Sir Josh <img src={frog} className="size-10" />,{" "}
          </span>
          <span className="flex gap-2 items-center">
            {" "}
            and Sir Joeven <img src={bat} className="size-10" />
          </span>
        </h1>
        <div className="flex p-20 flex-col md:flex-row gap-20 my-30  items-start">
          <img src={welcome} className="h-100" />
          <div className="space-y-15  max-w-5xl">
            <p>Hallo !!</p>
            <p className="flex">
              i made this little site to share a short message that i can't get
              to say in person...
            </p>

            <p className=''>
              but before that, i want you to know a little more about me.{" "}
              <span className="block">
                i’m Paris, 17 years old, passionate about programming, writing,
                and drawing. i’ve developed skills in building and creating
                things, because expressing my feelings in person can be hard. by
                making tangible things to show my appreciation, i can share what
                I feel and in a way, it helps me too
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}