import React from 'react';
import '../../CSS/Principio_Activo/BodyPrincipio.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolbarProps = {
  onSearch: (value: string) => void; // Callback para buscar
          // Ícono del botón
};

export const SearchToolbar: React.FC<SearchToolbarProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbar">
      <div className="searchContainer">
          <div className="inputContent">
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
                    placeholder='Buscar un principio activo...'
                    variant="outlined"
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

export default SearchToolbar;
