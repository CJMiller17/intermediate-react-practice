import { useContext } from "react";
import { NewPlayerContext } from "./main";
import PlayerCard from "./PlayerCard"

const Title = () => {
  return (
    <h1>
      Look at that awesome Team!
    </h1>
  )
}


function App() {
  const { newPlayerArray } = useContext(NewPlayerContext)
  
  let players = []
  for (let i = 0; i < newPlayerArray.length; i++) {
      
    players.push(
      <PlayerCard
        playerName={newPlayerArray[i].name}
        playerHealth={newPlayerArray[i].health}
        playerAttack={newPlayerArray[i].attack}
        playerSpeed={newPlayerArray[i].speed}
        playerUniqueId={newPlayerArray[i].id}
      />
    );
    

  }
  return (
    <div className="p-5 container">
      <Title />
      <main className="row">
        {/* Mapping over players and generating cards */}
        {players.map((playerCard, index) => (
          <div key={index}>{playerCard}</div>
        ))}
      </main>
    </div>
  );
}


export default App
