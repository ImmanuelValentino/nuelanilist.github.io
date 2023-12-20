import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-primary">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-5 gap-2"> 
                <Link href="/" className="font-bold text-color-secondary text-2xl ">NUELANIMELIST</Link>
                <InputSearch/>
                
            </div>
        </header>
    )
}
export default Navbar