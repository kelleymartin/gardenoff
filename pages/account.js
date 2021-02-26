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
          <div className="calendar">
            <div className="day">
              <p className="numberDay">Day 1</p>
              <p className="date">March 3rd</p>
              <ul>
                <li>Set up:</li>
                <li>5 waterers</li>
                <li>Blooms</li>
                <li>New flowers</li>
              </ul>
              <div className="achieved">
                A C H I E V E D :<br></br>
                <img src="/Cosmos4.png"></img>
                <img src="/Cosmos3.png"></img>
                <img src="/Cosmos5.png"></img>
                <img src="/Yuri3.png"></img>
                <img src="/Yuri4.png"></img>
                <img src="/Yuri5.png"></img>
              </div>
            </div>
            <div className="day">
              <p className="numberDay">Day 2</p>
              <p className="date">March 4th</p>
              <ul>
                <li>Set up:</li>
                <li>5 waterers</li>
                <li>Blooms</li>
                <li>New flowers</li>
              </ul>
              <div className="achieved">
                A C H I E V E D :<br></br>
                <img src="/Cosmos4.png"></img>
                <img src="/Cosmos3.png"></img>
                <img src="/Cosmos5.png"></img>
                <img src="/Yuri3.png"></img>
                <img src="/Yuri4.png"></img>
                <img src="/Yuri5.png"></img>
              </div>
            </div>
            <div className="day">
              <p className="numberDay">Day 3</p>
              <p className="date">March 5th</p>
              <ul>
                <li>Set up:</li>
                <li>5 waterers</li>
                <li>Blooms</li>
                <li>New flowers</li>
              </ul>
              <div className="achieved">
                A C H I E V E D :<br></br>
                <img src="/Cosmos4.png"></img>
                <img src="/Cosmos3.png"></img>
                <img src="/Cosmos5.png"></img>
                <img src="/Yuri3.png"></img>
                <img src="/Yuri4.png"></img>
                <img src="/Yuri5.png"></img>
              </div>
            </div>
            <div className="day">
              <button className="newDay">Add a day!</button>
            </div>
          </div>
        </div>
        <div className="container inputSection">
          <form>
            <div>
              <label>Day #</label>
              <input className="dayNumberInput" type="number" required></input>*
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                min="2021-03-01"
                max="2021-03-31"
                required
              ></input>
              *
            </div>
            <div>
              <label>Set up:</label>
              <input className="imageUpload" type="file"></input>
              or
              <input
                className="textField"
                type="text"
                placeholder="Write about your setup"
              ></input>
            </div>
            <div>
              <label>Waterers:</label>
              <input className="imageUpload" type="file"></input>
              or
              <input type="search" placeholder="Add waterer"></input>
            </div>
            <div>
              <label>Results:</label>
              <input className="imageUpload" type="file"></input>
              or
              <input type="checkbox"></input>Orange cosmo
              <input type="checkbox"></input>Pink cosmo
              <input type="checkbox"></input>Black cosmo
              <input type="checkbox"></input>Orange lily
              <input type="checkbox"></input>Pink lily
              <input type="checkbox"></input>Black lily
            </div>
            <input className="submit" type="submit"></input>
          </form>
        </div>
      </main>
    </div>
  );
}
