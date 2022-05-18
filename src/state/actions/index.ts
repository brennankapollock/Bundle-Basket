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

export interface InsertCellAfter {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
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

export interface BundleStart {
  type: ActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface BundleEnd {
  type: ActionType.BUNDLE_END;
  payload: {
    cellId: string;
    output: {
      code: string;
      err: string;
    };
  };
}

export type Action =
  | MoveCell
  | DeleteCell
  | InsertCellAfter
  | UpdateCell
  | BundleStart
  | BundleEnd;
