import React from 'react';
import '../../CSS/Via_De_Administracion/BodyVia.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarViaProps = {
  onSearch: (value: string) => void; // Callback para buscar
};

export const SearchToolBarVia: React.FC<SearchToolBarViaProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarVia">
      <div className="searchContainerVia">
          <div className="inputContentVia">
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
                    placeholder='Buscar una vía de administración...'
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

export default SearchToolBarVia;
