import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Dancing from '../dancing.gif'
import Sad from '../sad.gif'

function Video() {
  const songs = [
    "https://www.youtube.com/watch?v=S6hXns8yZic",
    "https://www.youtube.com/watch?v=IZpnVvT60DM",
    "https://www.youtube.com/watch?v=ohiWZiGCI8I",
    "https://www.youtube.com/watch?v=jBiDABDih1w",
    "https://www.youtube.com/watch?v=KRoVJStryZo",
    "https://www.youtube.com/watch?v=cGmV2qJYPas",
  ];

  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  const handleNextClick = () => {
    if (index === songs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleEnd = () => {
    setStart(false);
    handleNextClick();
  };

  return (
    <main className="relative w-full">
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1038166/pexels-photo-1038166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
        className="flex fixed bg-cover bg-no-repeat bg-center w-full justify-start lg:px-20 px-2 lg:py-36 py-28 bg-gradient-to-tr from-gray-900 to-black h-screen"
      >
        <ReactPlayer
          style={{
            boxShadow: "5px 5px 20px gray",
          }}
          pip={true}
          stopOnUnmount={false}
          controls={true}
          url={songs[index]}
          onStart={handleStart}
          onPause={() => setStart(false)}
          onPlay={() => setStart(true)}
          onEnded={handleEnd}
          onReady={() => setStart(false)}
        />
        <button
          onClick={handleNextClick}
          className={`font-semibold text-red-100 absolute left-[35%] lg:left-[18%] rounded-full lg:top-3/4 top-[62%] bg-cyan-500 hover:bg-cyan-600 px-10 py-2 cursor-pointer active:scale-90 duration-300 transition-all ease-out shadow-xl shadow-cyan-500/50 select-none ${
            start && "animate-bounce"
          }`}
        >
          Next
        </button>

        <div className="h-40 w-48  z-50 absolute opacity-70 lg:left-[85%] left-[28%] top-[72%] lg:top-36">
        {start?  <img src={Dancing} className='h-full rounded-full w-full object-cover' alt="" />:(
            <img src={Sad} className='h-full w-full rounded-full object-cover' alt="" />
        )}
          
        </div>
           
      </div>
    </main>
  );
}

export default Video;
