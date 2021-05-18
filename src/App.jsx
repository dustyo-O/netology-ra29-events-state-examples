import EmojieList from './components/EmojieList/EmojieList';
import LikeButton from './components/LikeButton/LikeButton';
import LikeButtonClassBased from './components/LikeButtonClassBased/LikeButtonClassBased';

function App() {
  return (
    <div className="App">
      <LikeButton/>
      <LikeButtonClassBased/>
      <EmojieList/>
    </div>
  );
}

export default App;
