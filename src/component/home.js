import React,{useState} from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Note from "./note";


function Home(props) {
  const fetchData = JSON.parse(localStorage.getItem("localNote")) 
  console.log(fetchData)

  const [addNote, setNote] = useState(fetchData)

  const deleteNote = (id) => {
    setNote(addNote.filter(eachItem => {
      return (
        eachItem.id !== id
      )
    }))
    
    
    localStorage.setItem("localNote", JSON.stringify(addNote.filter(eachItem => {
      return (
        eachItem.id !== id
      )
    })));
  };




  return (
    <div>
      <div className="notepad">
        
        <div className="note-grid">
          {!fetchData ? (
            <h1 className="noItem">No item here</h1>
          ) : (addNote.map(eachNote => {
            return (
              <Note change = {props.change} name={eachNote.name} id={eachNote.id} date={eachNote.date} onDelete={deleteNote} />
            )
        })) }
        </div>
        <Link to="/addnote" className="link">
          <button style={{backgroundColor: props.change ? "" : ""}} className="button">
            <FontAwesomeIcon style={{color: props.change ? "" : ""}} icon={faAdd} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
