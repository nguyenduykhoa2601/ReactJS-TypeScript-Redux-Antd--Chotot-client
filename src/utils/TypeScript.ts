import { ChangeEvent, FormEvent } from "react";
import rootReducer from  '../redux/reducers/index'


export type InputChange = ChangeEvent<
	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;



export type FormSubmit = FormEvent<HTMLFormElement>;


export type RootStore = ReturnType<typeof rootReducer>
export interface IParams {
	page: string
	slug: string
}

export interface IUserLogin {
	account: string;
	password: string;
}

export interface IUserRegister extends IUserLogin {
	name: string;
	cf_password: string;
}

export interface IUser extends IUserLogin {
	avatar: string;
	name: string;
	role: string;
	type: string;
	updatedAt: string;
	createdAt: string;
	_id: string;
	phone: string;
	address: string;
}

export interface IAlert {
	success?: string | string[];
	errors?: string | string[];
	loading?: boolean;
}

export interface IStory {
	_id?: string
	user: string | IUser
	title: string
	content: string
	description: string
	thumbnail: string,
	price: number
	category: string
	createdAt: string
  }