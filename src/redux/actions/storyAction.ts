import { Dispatch } from "redux";
import { checkTokenExp } from "../../utils/checkTokenExp";
import { postAPI } from "../../utils/FetchData";
import { IStory } from "../../utils/TypeScript";
import { imageUpload } from "../../utils/uploadImage";
import { ALERT, IAlertType } from "../types/alertTypes";
import { CREATE_STORIES_USER_ID, ICreateStoriesUserType } from "../types/storyType";

export const createStories = (story : IStory, token : string) => async(dispatch : Dispatch< IAlertType | ICreateStoriesUserType>) =>{
    const result = await checkTokenExp(token,dispatch)
    const access_token = result ? result : token
    let url;
    try {
        dispatch({
            type: ALERT,
            payload: {
                loading: true
            }
        })
        if(typeof(story.thumbnail)!== 'string'){
            const photo = await imageUpload(story.thumbnail)
            url = photo.url
        }
        else{
            url = story.thumbnail
        }

        const newStories = {...story,thumbnail : url}


        const res = await postAPI('blog', newStories,access_token)
        dispatch({
            type:CREATE_STORIES_USER_ID,
            payload: res.data
        })
        dispatch({ type: ALERT, payload: { success: res.data.msg } })
    } catch (error: any) {
        dispatch({
            type: ALERT,
            payload:{
                errors : 'Fail to create'
            }
        })
    }

}