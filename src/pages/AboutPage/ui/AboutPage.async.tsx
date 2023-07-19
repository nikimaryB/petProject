import React from 'react';

export const AboutPageAsync = React.lazy( () => new Promise(resolve => {
    //Для того чтобы увидеть задержку в лейзи
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setTimeout( () => resolve( import('./AboutPage')), 1500);
}));
