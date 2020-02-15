import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

// Action within action overfetching solution
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  const test = dispatch(fetchPosts());
  console.log(test);
  await test;

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // Alternate Lodash solution for userId
  // Initiate lodash chain
  _.chain(getState().posts)
    //getState().posts gets passed to .map as first argument
    .map("userId")
    //.map results will be passed to .uniq
    .uniq()
    //invoke forEach to .uniq results
    .forEach(id => dispatch(fetchUser(id)))
    //Execute the chain or else the chain won't run
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// Memoized solution for overfetching
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
