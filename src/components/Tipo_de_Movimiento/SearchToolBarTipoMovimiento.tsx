import React from 'react';
import '../../CSS/Tipo_de_Movimiento/BodyTipoMovimiento.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarTipoMovimientoProps = {
  onSearch: (value: string) => void; // Callback para buscar
};

export const SearchToolBarTipoMovimiento: React.FC<SearchToolBarTipoMovimientoProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarTipoMovimiento">
      <div className="searchContainerTipoMovimiento">
          <div className="inputContentTipoMovimiento">
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
                    placeholder='Buscar un tipo de movimiento...'
                    fullWidth
                    slotProps={{
                      input : { 
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

export default SearchToolBarTipoMovimiento