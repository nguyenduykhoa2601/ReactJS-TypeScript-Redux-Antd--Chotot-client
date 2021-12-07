import { IStory } from "../../utils/TypeScript";

export const GET_HOME_STORIES = "GET_HOME_STORIES";
export const GET_STORIES_CATEGORY_ID = "GET_STORIES_CATEGORY_ID";
export const GET_STORIES_USER_ID = "GET_STORIES_USER_ID";
export const CREATE_STORIES_USER_ID = "CREATE_STORIES_USER_ID";
export const DELETE_STORIES_USER_ID = "DELETE_STORIES_USER_ID";

export interface IHomeStories {
	_id: string;
	name: string;
	count: number;
	stories: IStory[];
}

export interface IStoriesCategory {
	id: string;
	stories: IStory[];
	total: number;
	search: string;
}

export interface IGetHomeStoriesType {
	type: typeof GET_HOME_STORIES;
	payload: IHomeStories[];
}

export interface IGetStoriesCategoryType {
	type: typeof GET_STORIES_CATEGORY_ID;
	payload: IStoriesCategory;
}

export interface IStoriesUser {
	id: string;
	blogs: IStory[];
	total: number;
	search: string;
}

export interface IGetStoriesUserType {
	type: typeof GET_STORIES_USER_ID;
	payload: IStoriesUser;
}

export interface ICreateStoriesUserType {
	type: typeof CREATE_STORIES_USER_ID;
	payload: IStory;
}

export interface IDeleteStoriesUserType {
	type: typeof DELETE_STORIES_USER_ID;
	payload: IStory;
}

export type IBlogUserType =
	| IGetStoriesUserType
	| ICreateStoriesUserType
	| IDeleteStoriesUserType;
