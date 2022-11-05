import React, {
  MutableRefObject,
  useDebugValue,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import SkinViewer from "./components/SkinViewer";

function App() {
  const leftSide = useRef() as MutableRefObject<HTMLDivElement>;
  const rightSide = useRef() as MutableRefObject<HTMLDivElement>;
  const header = useRef() as MutableRefObject<HTMLDivElement>;

  const handleMove = (e: MouseEvent | Touch) => {
    leftSide.current.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
  };

  useEffect(() => {
    addEventListener("mousemove", (e) => handleMove(e));
    addEventListener("touchmove", (e) => handleMove(e.touches[0]));
  }, []);

  return (
    <div className="App">
      <div id="header" ref={header}>
        <div id="left-side" className="side" ref={leftSide}>
          <div className="title">
            <div className="flex-col">
              <span>
                Hi! I am <span className="pf zishan">Zishan</span>
              </span>
              <span className="subtitle">Software Developer</span>
            </div>
            <div className="skin">
              <SkinViewer
                height={500}
                width={450}
                animation="run"
                speed={0.2}
                cape={true}
              />
            </div>
          </div>
        </div>

        <div id="right-side" className="side" ref={rightSide}>
          <div className="title">
            <div className="flex-col">
              <span>
                Hi! I am <span className="pf">Xinecraft</span>
              </span>
              <span></span>
              <span className="subtitle">
                Status: <span className="procrastinate">Procrastinating...</span>
              </span>
            </div>
            <div className="skin">
              <SkinViewer
                height={500}
                width={450}
                animation="walk"
                speed={0.4}
                cape={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div id="content">
        <h1>Hello there</h1>
      </div> */}
    </div>
  );
}

export default App;
