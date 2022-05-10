
import './App.css';
import Profile from './profile/profile';
import img from './prof.jpg'
function App() {
  return (
    <div className="App">
    <Profile src={img} fullName='Amine Bessouf' bio='23 ans' profession='web developer' />
    
    </div>
  );
}

export default App;
