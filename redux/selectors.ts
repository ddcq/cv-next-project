import { CardType } from '../model/cards';
import { card, sidebarVisible } from './reducer';
import { StateType } from './reducer';
export const selectSidebarVisible = (state: StateType): string | undefined => state[sidebarVisible];
export const selectCurrentCard = (state: StateType): CardType => state[card];
