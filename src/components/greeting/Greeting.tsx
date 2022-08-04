const Greeting = (props : GreetingProps) => {
    return <p>Hello {props.name}. You are {props.age} years old.</p>
};

type GreetingProps = {
    name : string,
    age : string
};

export default Greeting;