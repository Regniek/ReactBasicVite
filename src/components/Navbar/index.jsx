import { useState } from 'react';

const Navbar = ({onSearch}) => {
  const [ search, setSearch ] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  };
  const handleInputKeyDown = (e) => {
      if (e.key === 'Enter') {
        onSearch(search)
      }
  };

  return (
    <div>
      <p>Ticketes a lo que marca</p>
      <input 
        placeholder="Busca tu evento favorito" 
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  );
}
export default Navbar;