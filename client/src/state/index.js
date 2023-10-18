import { createSlice } from "@reduxjs/toolkit"; 
// a higher-order function that accepts the slice name (e.g. token, user, todos), a set of reducers, and returns a single reducer along with the action creators for that reducer

const initialState = { //data accessible throughout our application and we can grab it anytime we want, state stored in global state
    mode: "light", //dark mode and light mode
    user: null,
    token: null,
    posts: [], // all the posts we need
  };
  export const authSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: { //actions
      setMode: (state) => { 
        state.mode = state.mode === "light" ? "dark" : "light"; // if light move to dark and vice versa
      },
      setLogin: (state, action) => {
        state.user = action.payload.user; // sending user parameter
        state.token = action.payload.token; 
      },
      setLogout: (state) => {
        state.user = null; //when you logout we reset everything
        state.token = null;
      },
      setFriends: (state, action) => {
        if (state.user) { //if user exists get friends 
          state.user.friends = action.payload.friends;
        } else {
          console.error("user friends non-existent :(");
        }
      },
      setPosts: (state, action) => {
        state.posts = action.payload.posts;
      },
      setPost: (state, action) => {
        const updatedPosts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) return action.payload.post;
          return post;
        });
        state.posts = updatedPosts;
      },
    },
  });
  
  export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
  export default authSlice.reducer;  