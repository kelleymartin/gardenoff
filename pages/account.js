import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="navbar">
          <div className="topbar">
            <img className="icon" src="/icon.gif"></img>
            <h1 className="serverName">ACNH The Oasis</h1>
            <h1 className="contestName">Breeding Contest</h1>
            <h1 className="accountName">Account</h1>
          </div>
          <div className="bottombar"></div>
          <div className="droops"></div>
        </div>
        <div className="roundHeader">
          <img src="/Cosmos4.png"></img>
          <img src="/Cosmos3.png"></img>
          <img src="/Cosmos5.png"></img>
          <h2>Round #1</h2>
          <img src="/Yuri3.png"></img>
          <img src="/Yuri4.png"></img>
          <img src="/Yuri5.png"></img>
        </div>
        <h3>Cosmos & Lilies</h3>
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
            <div className="dayAndDate">
              <div className="formSection">
                <label htmlFor="dayNumber">Day #</label>
                <input
                  id="dayNumber"
                  className="dayNumberInput"
                  type="number"
                  required
                ></input>
              </div>
              <div className="formSection">
                <label htmlFor="date">Date:</label>
                <input
                  id="date"
                  className="dateInput"
                  type="date"
                  min="2021-03-01"
                  max="2021-03-31"
                  required
                ></input>
              </div>
            </div>
            <div className="formSection">
              <label htmlFor="setUpPic">Set up:</label>
              <input id="setUpPic" className="imageUpload" type="file"></input>
              or
              <textarea className="textField"></textarea>
            </div>
            <div className="formSection">
              <label htmlFor="waterers">Waterers:</label>
              <input
                id="waterersPic"
                className="imageUpload"
                type="file"
              ></input>
              or
              <select id="wateresSelect"></select>
            </div>
            <div className="formSection">
              <label htmlFor="results">Results:</label>
              <input
                id="resultsPic"
                className="imageUpload"
                type="file"
              ></input>
              or
              <div className="resultSelection">
                <div className="flowerBox">
                  <input id="orangeCosmo" type="checkbox"></input>
                  <img src="/Cosmos4.png"></img>
                  <p>Orange cosmo</p>
                </div>
                <div className="flowerBox">
                  <input id="pinkCosmo" type="checkbox"></input>
                  <img src="/Cosmos3.png"></img>
                  <p>Pink cosmo</p>
                </div>
                <div className="flowerBox">
                  <input id="blackCosmo" type="checkbox"></input>
                  <img src="/Cosmos5.png"></img>
                  <p>Black cosmo</p>
                </div>
                <div className="flowerBox">
                  <input id="orangeLily" type="checkbox"></input>
                  <img src="/Yuri3.png"></img>
                  <p>Orange lily</p>
                </div>
                <div className="flowerBox">
                  <input id="pinkLily" type="checkbox"></input>
                  <img src="/Yuri4.png"></img>
                  <p>Pink lily</p>
                </div>
                <div className="flowerBox">
                  <input id="blackLily" type="checkbox"></input>
                  <img src="/Yuri5.png"></img>
                  <p>Black lily</p>
                </div>
              </div>
            </div>
            <button className="submit" type="submit">
              Save new day
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
