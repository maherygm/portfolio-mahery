import React, { useEffect, useState } from "react";
import "./__toDo.css";
import Toogle from "../../customComponents/toogleBtn/Toogle";
const ToDo = () => {
  const [datas, setDatas] = useState([
    {
      nom: "mahery",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id saepe natus dolorem quasi! Quam quisquam, nobis quae dicta earum ipsa consequuntur a facere, possimus nostrum dolorum debitis tenetur iure molestiae fuga. Quas laboriosam voluptate est! Repellat cumque nisi ut?",
    },
    {
      nom: "andry",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id saepe natus dolorem quasi! Quam quisquam, nobis quae dicta earum ipsa consequuntur a facere, possimus nostrum dolorum debitis tenetur iure molestiae fuga. Quas laboriosam voluptate est! Repellat cumque nisi ut?",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = () => {
    let donne = [...datas, { nom: name, message: message }];
    setDatas(donne);
  };

  const handledelete = (index) => {
    const tab = [...datas];

    const tabcopie = tab.filter((item) => tab.indexOf(item) !== index);

    setDatas(tabcopie);
  };

  const handleclick = () => {
    setLigth(!ligth);
    const body = document.querySelector("body");
    body.classList.toggle("ligth");
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  const [ligth, setLigth] = useState(false);
  return (
    <>
      <div className="main container">
        <div className={`sticky ${sticky ? "active" : ""}`}>
          <div className="title-to-do">
            <h1>My to-do List</h1>
          </div>
          <div className="toogle">
            <Toogle ligth={ligth} onclick={handleclick} />
          </div>
        </div>
        <input
          type="text"
          placeholder="nom"
          className="my-texfield"
          onChange={handleNameChange}
          value={name}
        />
        <textarea
          name="textarea"
          placeholder="message"
          id="my-message"
          onChange={handleMessageChange}
          value={message}
        ></textarea>
        <button onClick={handleSubmit}>Post</button>
        <div className="list-item-to-do">
          <ul>
            {datas.map((data, index) => (
              <li key={index} className="Post">
                <h3>{data.nom}</h3>
                <p>{data.message}</p>
                <button className="delete" onClick={() => handledelete(index)}>
                  Delete Post
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDo;
