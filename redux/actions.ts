import { CardType } from '../model/cards';
import { CHANGE_SIDEBAR_VISIBILITY, SHOW_CARD } from './action-type';

type SidebarActionType = {
	type: typeof CHANGE_SIDEBAR_VISIBILITY;
	payload?: string;
};

type CardActionType = {
	type: typeof SHOW_CARD;
	payload?: CardType;
};

export type ActionType = SidebarActionType | CardActionType;

export const showSidebar = (id: string): SidebarActionType => ({ type: CHANGE_SIDEBAR_VISIBILITY, payload: id });
export const hideSidebar = (): SidebarActionType => ({ type: CHANGE_SIDEBAR_VISIBILITY, payload: undefined });
export const showCard = (id: CardType): CardActionType => ({ type: SHOW_CARD, payload: id });
