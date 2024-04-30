
import PlayerCard from "./PlayerCard"

const Title = () => {
  return (
    <h1>
      Look at that awesome Team!
    </h1>
  )
}

function App() {
  return (
    <div className="p-5 container">
      <Title />
      <main className="row">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </main>
    </div>
  );
}


export default App
