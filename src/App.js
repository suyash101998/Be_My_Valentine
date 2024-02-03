import { useState } from "react";
import "./App.css"
const phrases = [
  "No", "Are you sure", "Just say yes" , "Don't do this to me","Bholu say yes", "I'm gonna cry...", "You are breaking my heart ;(", "Last Chance :["
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 45 + 15;
  const handleNoClick  = () => setNoCount(noCount + 1);
  const getNoButtonText = () => {
    return phrases[Math.min(noCount,phrases.length-1)];
  }
  let highestNoClicked = noCount > phrases.length -1 ? true : false;
    return (
     <div className="valentine-container">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kissiing" />
        </>
      ):(
        <>
        {highestNoClicked ? (
        <img src="https://media1.tenor.com/m/9oEpu0aLehAAAAAC/angry.gif" alt="Angry bear" />
        ):(
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VxZG9oYjlnNDYwdWZ1b3pub3pyYzF2bGdzaWl1bjFudTBsd2NuZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7zGmpJmwUp5lNFudOf/giphy.gif" alt="Plese" />
        )}
        <div>
          Will you be my Valentine ?
        </div>
        <button
        className="yesButton"
        style={{fontSize : yesButtonSize}}
        onClick = {() => setYesPressed(true)}>
          Yes
        </button>
        <button onClick={handleNoClick} className = "noButton" >
          {getNoButtonText()}
        </button>
        </>
        )
        
      }
     </div>
    );
}

export default App;
