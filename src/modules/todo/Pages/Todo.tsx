import React from 'react';
import {Box} from '@material-ui/core';
import AppAnimate from '../../../@crema/core/AppAnimate';

const Todo = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box component='h4' mb={3} fontSize={20}>
          Todo
        </Box>
        <Box component='p' fontSize={16}>
          You can start from here..
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Todo;
