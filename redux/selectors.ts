import { card, sidebarVisible } from './reducer';
import { StateType } from './reducer';
export const selectSidebarVisible = (state: StateType): string | undefined => state[sidebarVisible];
export const selectCurrentCard = (state: StateType): string => state[card];
