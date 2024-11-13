export default function Input({type,placeholder,onchange,value}){
    return(
        <>
        <input type={type} placeholder={placeholder} onChange={onchange} value={value}/>
        </>
    )
}