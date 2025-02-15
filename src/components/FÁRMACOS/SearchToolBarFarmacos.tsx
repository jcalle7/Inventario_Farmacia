import React from 'react';
import '../../CSS/Farmacos/BodyFarmacos.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarFarmacosProps = {
  onSearch: (value: string) => void; // Callback para buscar
};

export const SearchToolBarFarmacos: React.FC<SearchToolBarFarmacosProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarFarmacos">
      <div className="searchContainerFarmacos">
          <div className="inputContentFarmacos">
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
                    placeholder='Buscar un fármaco...'
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

export default SearchToolBarFarmacos