import './preview.css';
import { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head>
        <style>html {background-color: white;}</style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
            eval(event.data);
          } catch(e) {
            const root = document.querySelector("#root");
            root.innerHTML = "<div style='color: red;'><h4>RunTime Error</h4>" + e + "</div>";
            console.error(e);
          }
          }, false)
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iFrame = useRef<any>();

  useEffect(() => {
    iFrame.current.srcdoc = html;

    setTimeout(() => {
      iFrame.current.contentWindow.postMessage(code, '*');
    }, 30);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        title='preview'
        srcDoc={html}
        sandbox='allow-scripts'
        ref={iFrame}
      />
    </div>
  );
};

export default Preview;
