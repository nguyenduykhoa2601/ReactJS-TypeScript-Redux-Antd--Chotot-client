import { userInfo } from "os";
import { Dispatch } from "redux";
import { checkTokenExp } from "../../utils/checkTokenExp";
import { patchAPI } from "../../utils/FetchData";
import { checkImage, imageUpload } from "../../utils/uploadImage";
import { checkPassword } from "../../utils/Valid";
import { ALERT, IAlertType } from "../types/alertTypes";
import { AUTH, IAuth, IAuthType } from "../types/authTypes";

export const updateUser =
	(avatar: File, name: string, address: string, phone: string, auth: IAuth) =>
	async (dispatch: Dispatch<IAlertType | IAuthType>) => {
		if (!auth.access_token || !auth.user) return;
		const result = await checkTokenExp(auth.access_token, dispatch);
		const access_token = result ? result : auth.access_token;
		let url = "";
		try {
			dispatch({
				type: ALERT,
				payload: {
					loading: true,
				},
			});
			if (avatar) {
				const checkAvatar = checkImage(avatar);
				if (checkAvatar)
					return dispatch({ type: ALERT, payload: { errors: checkAvatar } });
				const photoImage = await imageUpload(avatar);
				url = photoImage.url;
			}
			dispatch({
				type: AUTH,
				payload: {
					access_token: auth.access_token,
					user: {
						...auth.user,
						avatar: url ? url : auth.user.avatar,
						name: name ? url : auth.user.name,
						address: address ? address : auth.user.address,
						phone: phone ? phone : auth.user.phone,
					},
				},
			});
			const res = await patchAPI(
				"user",
				{
					avatar: url ? url : auth.user.avatar,
					name: name ? name : auth.user.name,
					address: address ? address : auth.user.address,
					phone: phone ? phone : auth.user.phone,
				},
				access_token
			);
			dispatch({
				type: ALERT,
				payload: {
					success: res.data.msg,
				},
			});
		} catch (error: any) {
			dispatch({
				type: ALERT,
				payload: {
					errors: error.msg.data.response,
				},
			});
		}
	};

export const resetPassword =
	(password: string, cf_password: string, token: any) =>
	async (dispatch: Dispatch<IAlertType | IAuthType>) => {
		const result = await checkTokenExp(token, dispatch);
		const access_token = result ? result : token;

		const msg = checkPassword(password, cf_password);
		if (msg) return dispatch({ type: ALERT, payload: { errors: msg } });
		try {
			dispatch({
				type: ALERT,
				payload: {
					loading: true,
				},
			});

			const res = await patchAPI("reset_password", { password }, access_token);
			dispatch({
				type: ALERT,
				payload: {
					success: res.data.msg,
				},
			});
		} catch (error: any) {
			dispatch({
				type: ALERT,
				payload: {
					errors: error.msg.data.response,
				},
			});
		}
	};
