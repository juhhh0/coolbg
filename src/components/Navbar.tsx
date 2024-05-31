import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-20 px-10">
        <Link to="/"><h1>coolbg</h1></Link>
        <ul className="flex gap-2 rounded-full bg-black border border-grey px-4 py-3">
            <li className="px-3 text-sm"><Link to="/effect">Effect</Link></li>
            <li className="px-3 text-sm">How to use</li>
            <li className="px-3 text-sm">Pricing</li>
        </ul>
        <a className="px-4 py-2 text-sm bg-white rounded-full text-black" href="">Log In</a>
    </nav>
  )
}
