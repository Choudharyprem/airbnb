import './App.css';
import Data from './Data'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
function App(){
    const cards = Data.map(item => {
        console.log(Data)
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })       
    return(
        <div>
          <Navbar/>
          <Hero/>  
          <section className="cards-list">
                {cards}
            </section>
          
        </div>
    )
}
export default App;