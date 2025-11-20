import { Intro } from "./components/Intro"
import { Greetings } from "./components/Greetings"
import { ThankYou } from "./components/ThankYou"
import { Content } from "./components/Content";

function App() {


  return (
    <>
      <div className="relative">
      
    
    
        <div className=" overflow-x-hidden">
          <Greetings />
          <Intro />
          <div className="h-2 bg-white w-full"></div>
          <ThankYou />
           <div className="h-2 bg-white w-full"></div>
          <div className="py-6 grass" >
            <img src="/pokemon.gif" className="h-40 mx-auto " />
          </div>
           <div className="h-3 bg-white w-full"></div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App
