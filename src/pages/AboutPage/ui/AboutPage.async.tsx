import React from 'react';

export const AboutPageAsync = React.lazy( () => new Promise(resolve => {
  //@ts-ignore
  //Для того чтобы увидеть задержку в лейзи
  setTimeout( () => resolve( import('./AboutPage')), 1500)
})); 