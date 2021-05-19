import "./App.css";
import { TweenMax, Power3 } from "gsap";
import { useRef, useEffect,useState } from "react";

function App() {
  let app=useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  const[state,setState]=useState(true)

  const handleExpand=()=>{
      TweenMax.to(circleRed,.5,{width:150,height:150,x:100,ease:Power3.easeOut})
      setState(false)
  }

  const handleShrink=()=>{
      TweenMax.to(circleRed,.5,{width:75,height:75,x:0,ease:Power3.easeOut})
      setState(true)
  }

  const animation = () => {
      TweenMax.to(app,0,{css:{visibility:"visible"}})
    TweenMax.from(circle,.8,{opacity:0,x:40,ease:Power3})
    TweenMax.from(circleRed,.8,{opacity:0,x:330,ease:Power3,delay:.2})
    TweenMax.from(circleBlue,.8,{opacity:0,x:500,ease:Power3,delay:.4})
  };

  useEffect(() => {
      animation()
  }, []);
  return (
    <div className="App" ref={el=> app=el}>
      <header className="App-header">
        <div className="circle-container">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div onClick={state ? handleExpand :handleShrink} ref={(el) => (circleRed = el)} className="circle red"></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
