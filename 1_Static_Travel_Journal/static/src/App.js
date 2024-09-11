import DataTravel from './DataTravel.js';
import PropsTravelCard from './PropsTravel.js'

function App() {
  const Cards = DataTravel.map(item =>{
    return <PropsTravelCard key={item.id} {...item}/>;
  })
  return (
  <div className="App">
    <nav className="NavStyle">
      <h3>My travel journal (using props)</h3>
    </nav>
    <div className="Container">
      <div className="TravelCard">
        {Cards}
        </div>
    </div>
  </div>
  );
}

export default App;
