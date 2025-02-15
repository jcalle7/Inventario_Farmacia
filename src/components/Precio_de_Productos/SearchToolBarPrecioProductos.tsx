import React from 'react';
import '../../CSS/Precio_de_Productos/BodyPrecioProductos.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarPrecioProductosProps = {
  onSearch: (value: string) => void; // Callback para buscar
          // Ícono del botón
};

export const SearchToolBarPrecioProductos: React.FC<SearchToolBarPrecioProductosProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarPrecioProductos">
      <div className="searchContainerPrecioProductos">
          <div className="inputContentPrecioProductos">
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={[]}  
                onInputChange={(_, value) => handleInputChange(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Buscar"
                    variant="outlined"
                    placeholder='Busca el precio de un producto...'
                    color='secondary'
                    fullWidth
                    slotProps={{ 
                        input: {
                      ...params.InputProps,
                      type: 'search',
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }
                    }}
                  />
                )}
              />
            </Stack>
          </div>
      </div>
    </div>
  );
};

export default SearchToolBarPrecioProductos;
