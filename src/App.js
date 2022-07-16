import Navbar from './components/Navbar/Navbar';
import LeftSide from './components/MainPage/LeftSide';
import RightSide from './components/MainPage/RightSide';
import MiddleSide from './components/MainPage/MiddleSide';
import {Box,Stack} from '@mui/material';


function App() {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <LeftSide />
            <MiddleSide />
            <RightSide />
        </Stack>
    </Box>
  );
}

export default App;
