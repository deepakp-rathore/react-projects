export const ClickHandlers = () => {

const clickhandler = (event, count = 1) => {
    console.log('Button Clicked',count ,event )
}

    return (
        <div>
            <button onClick={clickhandler}> Click Me</button>
            <button onClick={(event) => clickhandler(event, 4)}> Click Me</button>
        </div>
    )

}