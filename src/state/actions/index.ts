import { type } from 'os';
import { ActionType } from '../action-types';
import { CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export interface MoveCell {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface DeleteCell {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellBefore {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string;
    type: CellTypes;
  };
}

export interface UpdateCell {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action = MoveCell | DeleteCell | InsertCellBefore | UpdateCell;
