
import './App.css';
import Card from "./Card"
import data from './data'

function Navbar(){
  return(
    <div className='nav'>
      <i class="fas fa-regular fa-globe"></i>
      <p className='nav--text'>My Travel Journal</p>
    </div>
  )
}

function App() {

  const elems = data.map(d => {
    return(
      <>
      <Card 
        key = {d.key}
        {...d}
      />
      <hr className='card--hr' />
      </>
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className='cardSec' >
      {elems}
      </section>
    </div>
  );
}

export default App;
