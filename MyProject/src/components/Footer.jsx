export default function Footer(props)
{
    return(
        <footer>
            <p>{props.year[0]}   {props.company.name}</p>
        </footer>
    )
}