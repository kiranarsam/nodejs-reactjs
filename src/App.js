import './App.css';
import { FavoriteColor } from './hooks/hooks';
import { TimerUseEffect } from './hooks/use-effect';
import { ReactRefTrackingStateChanges, ReactUseRefUsage } from './hooks/use-ref';



function App() {
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <h3> Hello, I am using React. </h3>
      <FavoriteColor></FavoriteColor>
      <TimerUseEffect></TimerUseEffect>
      <ReactUseRefUsage></ReactUseRefUsage>
      <ReactRefTrackingStateChanges></ReactRefTrackingStateChanges>
    </div>
  );
}

export default App;
