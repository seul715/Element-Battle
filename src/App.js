import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  Splash: {
    name: "Splash",
    img: "https://png.pngtree.com/background/20230412/original/pngtree-water-bubbles-sea-background-picture-image_2398416.jpg",
  },
  Burn: {
    name: "Burn",
    img: "https://png.pngtree.com/png-clipart/20220321/original/pngtree-fire-png-or-psd-hd-image-png-image_7464348.png",
  },
  Grow: {
    name: "Grow",
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_BD812B9CA5053678165CECD17C48060B.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(true);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); 
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Splash")
      return computer.name === "Burn" ? "win" : "lose";
    else if (user.name === "Burn")
      return computer.name === "Grow" ? "win" : "lose";
    else if (user.name === "Grow")
      return computer.name === "Splash" ? "win" : "lose";
  };
  return (
    <div>
      {showModal && (
            <div className="modal">
              <div className="modal-content">
                <p>아래 " 물 💧 , 불 🔥 , 나무 🌿 " 버튼을 눌러서 결투를 시작하세요.</p>
                <button onClick={() => setShowModal(false)}>확인</button>
              </div>
            </div>
          )}

      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("Burn")}>불 🔥</button>
        <button onClick={() => play("Splash")}>물 💧</button>
        <button onClick={() => play("Grow")}>나무 🌿</button>
      </div>
    </div>
  );
}

export default App;