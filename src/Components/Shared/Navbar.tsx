
import Logo from "@/public/Logo.svg";
import Image from "next/image";


export interface NavProps {}

const Navbar: React.FC<NavProps> = ({}) => {
  return <nav className="text-amber-100 text-2xl"> 
<Image src={Logo} width={100} height={100} alt="Logo"/>
   </nav>
}

export default Navbar