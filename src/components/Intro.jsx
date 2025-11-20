import neko from '/cat71.gif';
import photos from '/photos.gif';


export const Intro = () => {

    return (
      <div className="coffee text-coffee relative h-100">
          <img src = {photos} className="bottom-0 left-[35%] absolute   z-10 h-20  " />
        <div className="h-full w-full flex gap-10 items-center justify-center ">
          <img src={neko} className="size-50" />
          <div className="  max-w-5xl">
            <p>
              i want to begin this message with a thank you for the efforts that
              all of you made, for us to learn, and feel what it feels like to
              work
            </p>
          </div>
        </div>
      </div>
    );
}