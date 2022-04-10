import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Study() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("hihi");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  console.log("i run all the time");

  // useEffect 1
  useEffect(iRunOnlyOnce, []);
  // useEffect 2 
  useEffect(() => {
    console.log("I run only once again");
  }, []);
  // useEffect 3
  useEffect(()=> {
    if (keyword !== "" && keyword.length > 5){
      console.log("Search For", keyword)
    }
  }, [keyword]);

  return (
    <div> 
      <input 
            value={keyword} 
            type="text" 
            onChange={onChange} 
            placeholder="Saerch here..." /> 
      <h1>  {counter} </h1>
      <Button text="Button" onclick={onClick}></Button>
    </div>
  );
}

export default Study;
