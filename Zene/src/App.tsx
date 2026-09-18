import { ZENELISTA } from './adat'
import './App.css'
import Zenek from './components/Zenek'


function App() {
  return (
    <>
      <header>
        <h1>Hurrá React</h1>
      </header>
      <article>
    <Zenek lista={ZENELISTA}/>
      </article>
      <footer><p>Kovács Kevin</p></footer>
    </>
  )
}

export default App
