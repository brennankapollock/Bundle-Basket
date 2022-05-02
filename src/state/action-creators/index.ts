import { ActionType } from '../action-types';
import {
  Action,
  UpdateCell,
  MoveCell,
  DeleteCell,
  InsertCellBefore,
} from '../actions';
import { CellTypes } from '../cell';
import { Direction } from '../actions';
export const updateCell = (id: string, content: string): UpdateCell => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCell => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): MoveCell => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellBefore = (
  id: string,
  cellType: CellTypes
): InsertCellBefore => {
  return {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
      id,
      type: cellType,
    },
  };
};
