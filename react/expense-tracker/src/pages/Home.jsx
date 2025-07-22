import "../styles/home.scss";
import { useState } from "react";

const Home = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    }

    const handleClickAgain = (name) => {
        console.log("Welcome " + name + "!");
    }

    // usestate practice
    const [name, setName] = useState("Joseph")

    const changeName = () =>{
        setName("John");
    }
    return (
        <div className="home">
            <h1>This is home page</h1> 
            
            <button className="btn" onClick={handleClick}>Click Me!</button>
            <button className="btn" onClick={(e)=>{
                handleClickAgain("John");
                // console.log(e.target);
            }}>Click Me again!</button>

            <p>Hello {name} and </p>

            <button className="btn" onClick={changeName}>Bita</button>
            </div>
    );
}
 
export default Home;