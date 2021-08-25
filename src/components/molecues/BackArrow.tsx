import * as React from 'react';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';
 
const BackArrow = () => {
    return ( 
        <div className="flex items-center w-14 justify-between text-md	mb-10">
            <FaLongArrowAltLeft/>
            <Link href="/">Back</Link>
        </div>
     );
}
 
export default BackArrow;