import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ACNH The Oasis Breeding Contest</h1>
        <div className="container">
          <div className="section">
          <h2>Leaderboard</h2>
          <div className="rounds">
            <button>Round 1</button>
            <button>Round 2</button>
            <button>Round 3</button>
            <button>Round 4</button>
            <button>Total</button>
          </div>
            <div className="board">
              <div className="rank">
                <h3>1</h3>
                <img src="/Eye Pink.svg"></img>
                Name
                Score
                <img src="/Cosmos4.png"></img>
                <img src="/Cosmos3.png"></img>
                <img src="/Cosmos5.png"></img>
                <img src="/Yuri3.png"></img>
                <img src="/Yuri4.png"></img>
                <img src="/Yuri5.png"></img>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
