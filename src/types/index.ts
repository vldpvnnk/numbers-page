export type FactType = 'math' | 'trivia' | 'date';

export interface UserInput {
  type: FactType;
  value: string;
  isRandom: boolean;
}