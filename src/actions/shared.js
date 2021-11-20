import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../utils/api';
import { receiveUser } from './users';
import { receiveQ } from './questions';

export function handleIData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUser(users));
			dispatch(receiveQ(questions));
			dispatch(hideLoading());
		});
	};
}
