import CARDS, { CardType } from '../model/cards';
import { CHANGE_SIDEBAR_VISIBILITY, SHOW_CARD } from './action-type';
import { ActionType } from './actions';

export const sidebarVisible = 'sidebarVisible';
export const card = 'card';

export type StateType = {
	[sidebarVisible]?: string;
	[card]: CardType;
};

const INITIAL_STATE: StateType = {
	[sidebarVisible]: undefined,
	[card]: CARDS[0],
};

function reducer(state = INITIAL_STATE, action: ActionType): StateType {
	switch (action.type) {
		case CHANGE_SIDEBAR_VISIBILITY:
			return {
				...state,
				[sidebarVisible]: action.payload,
			};
		case SHOW_CARD:
			return {
				...state,
				[card]: action.payload || CARDS[0],
			};
	}
	return state;
}

export default reducer;
