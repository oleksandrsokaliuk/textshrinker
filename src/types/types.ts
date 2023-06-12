export interface INumberState {
  numb: number;
}

export interface INumberAction {
  type: string;
  payload: number;
}

export enum ButtonEnum {
  INCREMENT = "Increment",
  DECREMENT = "Decrement",
  INCREMENT_BY_AMOUNT = "Increment By Amount",
  DECREMENT_BY_AMOUNT = "Decrement By Amount",
}
