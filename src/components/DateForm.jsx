
const DateForm = () => {
    const HandleClick = () => {
        alert('You clicked me!');
    }

    return (
        <button onClick={HandleClick}>Click me</button>
    );
}

export default DateForm;