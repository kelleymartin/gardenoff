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
            <h2>All players</h2>
            <div className="rounds">
              <button>Round 1</button>
              <button>Round 2</button>
              <button>Round 3</button>
              <button>Round 4</button>
              <button>Total</button>
            </div>
            <div className="cardBox">
              <div className="card">
                Latest from:
                <img src="/Eye Red.svg"></img>
                <p3>Name from Island</p3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
