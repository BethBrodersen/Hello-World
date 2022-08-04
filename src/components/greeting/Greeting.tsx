import './Greeting.css';

const Greeting = (props : GreetingProps) => {
    return <p className="greeting-paragraph" >Hello {props.name}. You are {props.age} years old.</p>
};

type GreetingProps = {
    name : string,
    age : string
};

export default Greeting;