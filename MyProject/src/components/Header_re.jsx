import "./Header_re.css"
export default function Header_re(para)
{
    return(
        <div>
            <h1>{para.title}</h1>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Contact Us</a>
                <a href="#">Next Webpage</a>
            </nav>
        </div>
    )
}