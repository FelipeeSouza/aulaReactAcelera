import { Box, Typography } from '@mui/material';
import Books from './components/books';

function App() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ backgroundColor: "#f5f5f5", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Typography
          variant="h3"
          sx={{ textAlign: 'center', color: '#333', marginBottom: '20px', textShadow: '20px 20px 20px rgba(50, 50, 50, 2.12)', }} component="h1">Prateleira de Livros</Typography>
        <Books />
      </Box>
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#ddd', }}>
        <Typography variant="body2" sx={{ color: '#660' }}>
          © {new Date().getFullYear()} Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
