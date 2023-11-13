import { useState, useEffect, forwardRef, useImperativeHandle} from 'react';

const Navbar = forwardRef(({onSearch},ref) => {
  const [ search, setSearch ] = useState('');
  

  useEffect(() => {
    console.log('1010 effect search')
  }, [search]);

  useEffect(() => {
    console.log('1010 effect on search')
  }, [onSearch]);

  useImperativeHandle(ref, () => ({
    search,
  }));

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  };
  const handleInputKeyDown = (e) => {
      if (e.key === 'Enter') {
        onSearch(search)
      }
  };

  return (
    <div ref={ref} style={{
        marginBottom: 14,
        width: '100%',
        display: 'flex',
        }}>
      <div style={{ flex: 1, display:'flex' }}>
        <p style={{
          fontSize: 18,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        }}>
        Ticketes a lo que marca</p>
      </div>
      <div style={{ 
        flex: 1, 
        display:'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end' 
      }}>
      <input 
          placeholder="Busca tu evento favorito" 
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{ 
            width: 200, 
            fontSize: 16, 
            borderRadius: 4, 
            padding: 8, 
            border: 'none' 
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;