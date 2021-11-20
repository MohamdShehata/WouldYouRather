export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';

export function seUser(id) {
	return {
		type: SET_AUTHED_USER,
		id
	};
}

export function reseUser(id) {
	return {
		type: RESET_AUTHED_USER
	};
}
