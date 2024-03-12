import { useContext, useState } from "react";
import "./App.css";
import Editor from "./compoments/editor/Editor";
import Navbar from "./compoments/navbar/Navbar";
import Sidebar from "./compoments/sidebar/Sidebar";
import { Data } from "./context/AppProvider";
import Home from "./compoments/home/Home";
import About from "./compoments/about/About";
import Contact from "./compoments/contact/Contact";
function App() {
  const a = useContext(Data);
  const [route, setroute] = useState("home");
  return (
    <div className="layout">
      <Navbar setroute={setroute} route={route} />
      {route === "home" ? <Home setroute={setroute} /> : ""}
      {route === "notes" ? (
        <div className="sidebarWithEsitor">
          <Sidebar />
          {a.canvasid ? (
            <div
              className="edito"
              style={a.canvasid ? {} : { display: "block" }}
            >
              <Editor />
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={async () => {
                  let response = await fetch(
                    "http://localhost:5000/chapter/update",
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                        chapter_id: a.canvasid,
                      },
                      body: JSON.stringify({ content: a.canvasvalue }),
                    }
                  );
                  response = await response.json();
                  console.log(response);
                }}
              >
                Save Chapter
              </button>
            </div>
          ) : (
            <img
              src="./cover.jpg"
              style={{
                height: "87vh",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
                overflow: "hidden",
              }}
              alt=""
            />
          )}
        </div>
      ) : (
        ""
      )}
      {route === "about" ? <About /> : ""}
      {route === "contact" ? <Contact /> : ""}
    </div>
  );
}

export default App;
