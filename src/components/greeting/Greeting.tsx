import './Greeting.css';

const Greeting = (props : GreetingProps) => {

    let name =props.name;

    const changeName = () => {
        name="Jim";
        console.log("button was clicked");
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