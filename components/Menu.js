import Link from 'next/link'

const Menu = () => (
    <div>
    <h1 class="text-center">GitHub</h1>
     <nav className="navbar navbar-default">
        <div className="navbar-header">
            <Link className="active">
                <Link href="/">Home</Link>
            </Link>
        </div>
    </nav>
    </div>
)

export default Menu