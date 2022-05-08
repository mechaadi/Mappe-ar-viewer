import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [modelLink, setModelLink] = useState("")
  useEffect(() => {
    try{
    const gltfLink = window.location.href.split('?model=')[1]
    setModelLink(gltfLink);
    }catch(e){}
  }, [])
  return (
    <div className="App">
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src={modelLink}
        ar
        ar-modes="webxr scene-viewer quick-look"
        seamless-poster
        shadow-intensity="1"
        camera-controls
        enable-pan
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    </div>
  );
}

export default App;
