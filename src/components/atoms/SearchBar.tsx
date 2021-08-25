import * as React from 'react';

type SearchBarProps = {
    searchProductName: string;
    handleSearchProducts: (productName: string) => void;
}
 
const SearchBar: React.FC<SearchBarProps> = ({searchProductName, handleSearchProducts}) => {

    const handleSearchName = (e: any) => {
        const inputText = e.target.value.toLowerCase();
        handleSearchProducts(inputText);
    }

    return ( 
        <input
            type="text"
            placeholder="Search product"
            onChange={handleSearchName}
            value={searchProductName}
            className="w-11/12	outline-none		p-2 m-2"
        />
     );
}
 
export default SearchBar;