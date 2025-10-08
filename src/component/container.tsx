
interface ICountainer{
    children : React.ReactNode
}

function Container({children} : ICountainer){
    return(
        <div className="container mx-auto">
            {children}
        </div>
    )
}
export default Container