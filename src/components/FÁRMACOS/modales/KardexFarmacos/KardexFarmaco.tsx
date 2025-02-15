import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

const KardexFarmaco = () => {

  const renderViewIcon = () => (
    <IconButton sx={{color: "black"}}>
      <VisibilityIcon />
    </IconButton>
  );

  return (
    <>
    <Paper elevation={5} sx={{ padding: 2, borderRadius: 2, width: '100%', boxShadow: 'rgba(118, 118, 128, 0.38)', backgroundColor: 'rgba(224, 224, 224, 0.17)' }}>

      {/* Tablas */}
        {/* Tercera Tabla */}
        <Box sx={{ marginTop: 3 }}>
        <Paper elevation={3} sx={{ width: '97%', padding: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
            <h3>Bodega Kárdex</h3>
          </Box>
          <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(224, 224, 224, 0.64)' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Ítem</TableCell>
                  <TableCell>Tipo de Movimiento</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio Unitario</TableCell>
                  <TableCell>Total</TableCell> 
                  <TableCell>Tipo de Documento</TableCell>
                  <TableCell>Número de Documento</TableCell>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Bodega</TableCell>
                  <TableCell>Visualizar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>14/02/2024</TableCell>
                  <TableCell>Paracetamol</TableCell>
                  <TableCell>Ventas</TableCell>
                  <TableCell>999</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>cédula</TableCell>
                  <TableCell>0103590786</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Bodega de Oftalmología</TableCell>
                  <TableCell>{renderViewIcon()}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>14/02/2024</TableCell>
                  <TableCell>Paracetamol</TableCell>
                  <TableCell>Ventas</TableCell>
                  <TableCell>999</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>cédula</TableCell>
                  <TableCell>0103590786</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Bodega de Oftalmología</TableCell>
                  <TableCell>{renderViewIcon()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
    </Box>
    </Paper>
  </>
  );
};

export default KardexFarmaco;