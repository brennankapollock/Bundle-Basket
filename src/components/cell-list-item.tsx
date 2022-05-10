import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = <CodeCell />;
  } else {
    child = <TextEditor />;
  }

  return (
    <div>
      <h1>{child}</h1>
    </div>
  );
};

export default CellListItem;
