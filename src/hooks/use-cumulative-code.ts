import { useTypedSelector } from './use-typed-selector';

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;

    const orderedCells = order.map((id) => {
      return data[id];
    });

    const showFunction = `
      import _React from 'react';
      import _ReactDOM from 'react-dom';


        var show = (value) => {
          if(typeof value === 'object') {
            if(value.$$typeof && value.props) {
              _ReactDOM.render(value, document.querySelector('#root'));
              } 
          else { 
            document.querySelector('#root').innerHTML = JSON.stringify(value);
            } 
         } else {
            document.querySelector('#root').innerHTML = value;
            }
        }
        ;
      `;

    const showFuncNoOp = 'var show = () => {}';

    const cumulativeCode = [];

    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCode.push(showFunction);
        } else {
          cumulativeCode.push(showFuncNoOp);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join('\n');
};
