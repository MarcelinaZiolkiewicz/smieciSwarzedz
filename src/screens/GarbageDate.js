import React from 'react';
import {Box, Center} from 'native-base';
i;
const GarbageDate = () => {
  return (
    <Center>
      <Box
        alignSelf="center"
        bg="primary.600"
        p="5"
        width="100%"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}>
        Kiedy odbiorą śmieci?
      </Box>
    </Center>
  );
};

export default GarbageDate;
