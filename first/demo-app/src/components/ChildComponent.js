export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>
                Greet
            </button>
        </div>
    )
}