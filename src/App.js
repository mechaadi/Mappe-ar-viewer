import "./App.css";

function App() {
  return (
    <div className="App">
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="/ar/BrainStem.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        height="100%"
        seamless-poster
        shadow-intensity="1"
        camera-controls
        enable-pan
      ></model-viewer>
    </div>
  );
}

export default App;
