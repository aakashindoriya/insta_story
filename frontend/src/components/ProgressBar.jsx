import React from 'react';
import { Box } from '@chakra-ui/react';

const ProgressBar = ({ progress }) => {
  return (
    <Box position="absolute" top="0" w="full" h="5px" bg="gray.600">
      <Box h="full" bg="blue.400" width={`${progress}%`} transition="width 0.1s linear" />
    </Box>
  );
};

export default ProgressBar;

