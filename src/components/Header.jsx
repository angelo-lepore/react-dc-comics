import Logo from './Logo'

export default function Header(){
    return (
        <header>
            <div className="navbar">
                <Logo/>
                <ul>
                    <li><a>CHARACTERS</a></li>
                    <li><a>COMICS</a></li>
                    <li><a>MOVIES</a></li>
                    <li><a>TV</a></li>
                    <li><a>GAMES</a></li>
                    <li><a>COLLECTIBLES</a></li>
                    <li><a>VIDEOS</a></li>
                    <li><a>FANS</a></li>
                    <li><a>NEWS</a></li>
                    <li><a>SHOP</a></li>
                </ul>
            </div>
        </header>
    )
}
