import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {
  return (
    <>
    <Navbar/>
    <main>
      This is the main content of the website.
    </main>
    <div className="cards">
      <Card title="Card 1" description="This is the description of card 1"/>
      <Card title="Card 2" description="This is the description of card 2"/>
      <Card title="Card 3" description="This is the description of card 3"/>
      <Card title="Card 4" description="This is the description of card 4"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
