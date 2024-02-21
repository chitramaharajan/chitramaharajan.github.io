import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { IoMdRefresh } from "react-icons/io";
// // import { TfiDownload } from "react-icons/tfi";
// import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function HomePageBesant() {
  var menu = [
    "AboutUs",
    "Contact",
    "Courses",
    "TrainerDetails",
    "TraineeDetails",
  ];

  const count = useRef();

  function setCount() {
    count.current = count.current + 1;
    console.log(count.current);
  }

  const values = useSelector((state) => state.keytoAccess);
  const navigate = useNavigate();

  function logout() {
    navigate("/login");
  }

  const [value, setValue] = useState("male");

  const [num, setNum] = useState(0);

  const [count1, setCount1] = useState(0);

  const calculatedValue = useMemo(() => calculation(num), [count1]);
  function calculation(num) {
    console.log("called");
    for (let i = 0; i < 10; i++) {
      num = num + 1;
    }
    return num;
  }
  function showConsole() {
    setCount1(num);
  }
  return (
    <div className="register">
      <div className="col-1">
        <h1>Welcome to Besant Technologies</h1>
    
        <div> 
          {menu.map((item, index) => {
            return (
              <div onClick={() => navigate(`/${item}`)} className={"homepage"}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePageBesant;
