import React from 'react';
import '../../CSS/Grupo_Terapeutico/BodyGrupo.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type SearchToolBarGrupoProps = {
  onSearch: (value: string) => void; // Callback para buscar
          // Ícono del botón
};

export const SearchToolBarGrupo: React.FC<SearchToolBarGrupoProps> = ({ onSearch }) => {
  const handleInputChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="searchToolbarGrupo">
      <div className="searchContainerGrupo">
          <div className="inputContentGrupo">
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
                    placeholder='Buscar un grupo terapéutico...'
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

export default SearchToolBarGrupo;
