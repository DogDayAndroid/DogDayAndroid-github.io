'use client';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => (
    <Stack
        sx={{ color: 'grey.500' }}
        spacing={2}
        direction="row"
        className='w-screen h-screen'
        justifyContent="center"
        alignItems="center"
    >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
    </Stack>
);

export default Loading;