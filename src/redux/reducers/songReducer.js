const InitialState = {
    songList: []
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        songList: action.payload.data,
      };
      case 'CLEAR_SONGS_SUCCESS':
      return {
        ...state,
        songList: [],
      };

    default:
      return state;
  }
};
