export interface GeologyAge {
    id: number;
    title: string;
    children?: GeologyAge[];
  }

  
export type Page<T = any> = {
  title: string;
  type: PageType;
  data?: T;
  index: number;
};

export enum PageType {
  first = "create dino",
  second = "edit age",
  third = "chore"
}