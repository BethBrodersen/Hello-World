import { useState } from 'react';
import './Greeting.css';

const Greeting = (props : GreetingProps) => {
    console.log("greeting is running");

    const [name, setName] = useState<string>(props.name);

    const changeName = () => {
        setName("Jim");
        console.log("button was clicked", name);
    };

    return <div>
                <p className="greeting-paragraph" >Hello {name}. You are {props.age} years old.</p>
                <button onClick={changeName}  >Change my name</button>
        </div>
};

type GreetingProps = {
    name : string,
    age : string
};

export default Greeting;