import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App/App';

// const elem1 = React.createElement('span', { children: 'hello' })
// const elem2 = React.createElement('span', { children: 'helworld' })

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2],
// })
// console.log(element)

// ReactDom.render(<App />, document.querySelector('#root'))

//////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

console.log('deploy');
