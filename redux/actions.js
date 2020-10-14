import { CHANGE_SIDEBAR_VISIBILITY } from "./action-type";

export const showSidebar = (id) => ({ type: CHANGE_SIDEBAR_VISIBILITY, payload: id });
export const hideSidebar = () => ({ type: CHANGE_SIDEBAR_VISIBILITY, payload: undefined }); 
