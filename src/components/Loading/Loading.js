import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading className='preloader'
    type={'spinningBubbles'}
    color={'green'}
    height={'30%'}
    width={'30%'}
  />
);

export default Loading;
