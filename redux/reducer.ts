import CARDS from '../model/cards';
import { CHANGE_SIDEBAR_VISIBILITY, SHOW_CARD } from './action-type';
import { ActionType } from './actions';

export const sidebarVisible = 'sidebarVisible';
export const card = 'card';

export type StateType = {
	[sidebarVisible]?: string;
	[card]: string;
};

const INITIAL_STATE: StateType = {
	[sidebarVisible]: undefined,
	[card]: CARDS[0].n,
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
				[card]: action.payload || CARDS[0].n,
			};
	}
	return state;
}

export default reducer;
