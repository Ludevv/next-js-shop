import * as React from 'react';

type ShowCategoriesProps = {
    categories: {
        name: string;
    }[];
}
 
const ShowCategories: React.FC<ShowCategoriesProps> = ({categories}) => {
    return ( 
        <div className="flex">
            <p className="mr-4 ">Categories:</p>
            {categories.map((category, index) => <p key={index} className="bg-pink-400 w-min p-1 rounded-md	text-sm mr-3 mb-8">{category.name}</p>)}
        </div>
     );
}
 
export default ShowCategories;