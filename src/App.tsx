import './App.css';
import BodyBottom from './components/body-bottom';
import BodyTop from './components/body-top';
import Plan from './components/plan';
import Review from './components/review';

function App() {
  return (
    <div>
      <BodyTop></BodyTop>
      <Plan></Plan>
      <Review></Review>
      <BodyBottom></BodyBottom>
    </div>
  );
}

export default App;
