export default function Heading({level=1,children,className,...props}){
    const Tag = `h${level}`;
    return(
        <Tag className={className} {...props}>
            {children}
        </Tag>
    )
}