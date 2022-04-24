import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { useEffect, useState } from 'react';
interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [mainWidth, setMainWidth] = useState(window.innerWidth * 0.75);
  let resizableProps: ResizableBoxProps;

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < mainWidth) {
          setMainWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [mainWidth]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      maxConstraints: [width * 0.75, Infinity],
      minConstraints: [width * 0.2, Infinity],
      height: Infinity,
      width: mainWidth,
      resizeHandles: ['e'],
      onResizeStop: (event, data) => {
        setMainWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      maxConstraints: [Infinity, height * 0.9],
      minConstraints: [Infinity, 100],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
