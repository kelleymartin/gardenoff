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
                <label>Day #</label>
                <input
                  className="dayNumberInput"
                  type="number"
                  required
                ></input>
              </div>
              <div className="formSection">
                <label>Date:</label>
                <input className="dateInput"
                  type="date"
                  min="2021-03-01"
                  max="2021-03-31"
                  required
                ></input>
              </div>
            </div>
            <div className="formSection">
              <label>Set up:</label>
              <input className="imageUpload" type="file"></input>
              or
              <textarea className="textField"></textarea>
            </div>
            <div className="formSection">
              <label>Waterers:</label>
              <input className="imageUpload" type="file"></input>
              or
              <select></select>
            </div>
            <div className="formSection">
              <label>Results:</label>
              <input className="imageUpload" type="file"></input>
              or
              <div className="resultSelection">
              <div className="flowerBox">
                <input type="checkbox"></input>
                <img src="/Cosmos4.png"></img>
                <p>Orange cosmo</p>
              </div><div className="flowerBox">
                <input type="checkbox"></input>
                <img src="/Cosmos3.png"></img>
                <p>Pink cosmo</p>
              </div><div className="flowerBox">
                <input type="checkbox"></input>
                <img src="/Cosmos5.png"></img>
                <p>Black cosmo</p>
              </div><div className="flowerBox">
                <input type="checkbox"></input>
                <img src="/Yuri3.png"></img>
                <p>Orange lily</p>
              </div><div className="flowerBox">
                <input type="checkbox"></input>
                <img src="/Yuri4.png"></img>
                <p>Pink lily</p>
              </div><div className="flowerBox">
                <input type="checkbox"></input>
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
