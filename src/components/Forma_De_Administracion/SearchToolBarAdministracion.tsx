import React from 'react';
import '../../CSS/Forma_De_Administracion/BodyAdministracion.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarAdministracionProps = {
  onSearch: (value: string) => void; // Callback para buscar
};

export const SearchToolBarAdministracion: React.FC<SearchToolBarAdministracionProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarAdministracion">
      <div className="searchContainerAdministracion">
          <div className="inputContentAdministracion">
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
                    placeholder='Buscar una forma de administración...'
                    variant="outlined"
                    fullWidth
                    slotProps={{ input: {
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

export default SearchToolBarAdministracion;
