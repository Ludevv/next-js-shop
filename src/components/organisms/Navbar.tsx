import * as React from 'react';

type NavbarProps = {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    return ( 
        <div className="bg-green-300 text-3xl p-4 text-gray-700 font-extrabold">
            <h1>ReasonApps Shop</h1>
        </div>
     );
}
 
export default Navbar;