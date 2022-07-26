import React from "react";
import { Link } from "react-router-dom";
import deleteLogo from "./Images/delete (1).png";
import secondDeleteLogo from "./Images/delete (2).png";
import viewLogo from "./Images/invisible.png";
import secondViewLogo from "./Images/invisible (1).png";

function Note(props) {
  const deleteNote = (e) => {
    const allDeleteBtn = document.querySelectorAll(".deleteBtn");
    const convertNode = [];

    for (let i = 0; i < allDeleteBtn.length; i++) {
      convertNode.push(allDeleteBtn[i]);
    }

    console.log(convertNode);

    console.log(convertNode.indexOf(e.target));

    const targetNode = convertNode.indexOf(e.target);

    const fetchLocalData = JSON.parse(localStorage.getItem("localNote"));
    console.log(fetchLocalData);

    fetchLocalData.splice(targetNode, 1);

    console.log(fetchLocalData);

    localStorage.setItem("localNote", JSON.stringify(fetchLocalData));
    document.location.reload(true);
  };

  const editContent = (e) => {
    const allEditBtn = document.querySelectorAll(".edit");
    const editArr = [];

    console.log(e.target);

    for (let i = 0; i < allEditBtn.length; i++) {
      editArr.push(allEditBtn[i]);
    }

    console.log(editArr.indexOf(e.target));

    localStorage.setItem("index", JSON.stringify(editArr.indexOf(e.target)));
  };

  const linkStyle = {
    color: "black",
  };

  const secondLinkStyle = {
    color: "white",
  };
  return (
    <div
      style={{
        backgroundColor: props.change
          ? "rgba(19, 27, 116, 0.8)"
          : "rgba(255, 255, 255, 0.8)",
      }}
      className="allNote"
    >
      <div
        style={{ color: props.change ? "white" : "rgb(8, 8, 27)" }}
        className="note-card"
      >
        <div className="title-edit">
          <h1>{props.name}</h1>
          <Link
            style={props.change ? secondLinkStyle : linkStyle}
            to="/editnote"
          >
            <button>
              <img
                className="edit"
                onClick={editContent}
                src={props.change ? secondViewLogo : viewLogo}
                alt=""
              />
            </button>
          </Link>
        </div>

        <div className="date-delete">
          <h4>{ props.date}</h4>
          <button style={{ backgroundColor: "none" }}>
            <img
              className="deleteBtn"
              onClick={deleteNote}
              style={{ width: "16px", height: "16px" }}
              src={props.change ? secondDeleteLogo : deleteLogo}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
