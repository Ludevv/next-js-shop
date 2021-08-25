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
        />
     );
}
 
export default SearchBar;