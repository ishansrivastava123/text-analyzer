import React, {useState} from "react";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import ToggleStyle from "./components/ToggleStyle";
import TextForm from "./components/TextForm";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("", "");

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(22, 46, 66)"
      showAlert("Dark Mode has been enabled!", "success")
    }
    else if(mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled!", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return(
      <div>
        <Navbar title="Text Anayzer" mode={mode} toggleMode={toggleMode} />
        <div className="container mx-auto my-4">
          <Alerts alert={alert} />
            {<TextForm mode={mode} showAlert={showAlert} />}
            <div className="my-5">
              {<ToggleStyle mode={mode} />}
            </div>
        </div>
      </div>
  )
}