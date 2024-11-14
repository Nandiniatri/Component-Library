export default function Button({children,onclick,className}){
    return(
        <>
        <button onClick={onclick} className={className}>{children}</button>
        </>
    )
}