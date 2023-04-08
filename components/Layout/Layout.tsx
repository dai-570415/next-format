import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="container">
            <header>
                <ul>
                    <li><Link href="/"><a>HOME</a></Link></li>
                    <li><Link href="/contact"><a>CONTACT</a></Link></li>
                </ul>  
            </header>
            { children }
            <footer></footer>
        </div>
    );
}

export default Layout;