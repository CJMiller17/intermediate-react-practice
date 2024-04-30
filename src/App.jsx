import { useContext } from "react";
import { NewPlayerContext } from "./main";
import PlayerCard from "./PlayerCard"

const Title = () => {
  const {newPlayerArray} = useContext(NewPlayerContext)
  return (
    <h1>
      Look at that awesome Team!
    </h1>
  )
}
let players = [
  <div>
    <h2>{newPlayerArray[0].name}</h2>
    <p>{newPlayerArray[0].health}</p>
  </div>
]

function App() {
  return (
    <div className="p-5 container">
      <Title />
      <main className="row">
        {players.map(e => e)}
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </main>
    </div>
  );
}


export default App
