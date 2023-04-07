import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messagesSlice";
import userReducer from "./userSlice";
import selectedListingSlice from "./selectedListingSlice";
import selectedConvoSlice from "./selectedConvoSlice";
import selectedForumPostsSlice from "./selectedForumPostsSlice";
import snackBarSlice from "./snackBarSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    allMessages: messagesReducer,
    selectedListing: selectedListingSlice,
    selectedConvo: selectedConvoSlice,
    selectedForumPosts: selectedForumPostsSlice,
    snackBar: snackBarSlice
  },
});
