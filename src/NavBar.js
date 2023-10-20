import { Link } from "react-router-dom";

export default function NavBar(){
return(
<>
<center>
<div className="NavBar">
<Link to="/" >Home</Link>
<Link to="/technical" >Technical</Link>
<Link to="/education" >Education</Link>
<Link to="/contact" >Contact</Link>
</div>
</center>
</>
);
}