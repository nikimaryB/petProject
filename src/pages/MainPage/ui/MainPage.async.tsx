import React from 'react';

export const MainPageAsync = React.lazy( () => new Promise(resolve => {
  //@ts-ignore
  //Для того чтобы увидеть задержку в лейзи
  setTimeout( () => resolve( import('./MainPage')), 1500)
})); 