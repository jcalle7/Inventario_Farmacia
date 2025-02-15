import React from 'react';
import '../../CSS/Lista_de_Precios/BodyListaPrecios.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarListaPreciosProps = {
  onSearch: (value: string) => void; // Callback para buscar
};

export const SearchToolBarListaPrecios: React.FC<SearchToolBarListaPreciosProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarListaPrecios">
      <div className="searchContainerListaPrecios">
          <div className="inputContentListaPrecios">
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
                    fullWidth
                    placeholder='Buscar una lista de precios...'
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

export default SearchToolBarListaPrecios