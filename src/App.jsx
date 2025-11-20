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
          <ThankYou />
          <div className="py-6" >
            <img src="/pokemon.gif" className="h-40 mx-auto " />
          </div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App
