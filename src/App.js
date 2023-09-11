import './App.css';
import { Home } from './hooks/custom-hooks';
import { FavoriteColor } from './hooks/hooks';
import { ReactUseCallbackProblem, ReactUseCallbackSolution } from './hooks/use-callback';
import { TimerUseEffect } from './hooks/use-effect';
import { ReactUseMemoPerformanceHitIssue, ReactUseMemoPerformanceHitIssueFixed } from './hooks/use-memo';
import { Todos } from './hooks/use-reducer';
import { ReactRefTrackingStateChanges, ReactUseRefUsage } from './hooks/use-ref';
import MyCar from './react-components/r-components';



function App() {
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <h3> Hello, I am using React. </h3>
      <FavoriteColor></FavoriteColor>
      <TimerUseEffect></TimerUseEffect>
      <ReactUseRefUsage></ReactUseRefUsage>
      <ReactRefTrackingStateChanges></ReactRefTrackingStateChanges>
      <Todos></Todos>
      <ReactUseCallbackProblem></ReactUseCallbackProblem>
      <ReactUseCallbackSolution></ReactUseCallbackSolution>
      <ReactUseMemoPerformanceHitIssue></ReactUseMemoPerformanceHitIssue>
      <ReactUseMemoPerformanceHitIssueFixed></ReactUseMemoPerformanceHitIssueFixed>
      {/* <Home></Home> */}
      {/* <MyCar></MyCar> */}

    </div>
  );
}

export default App;
