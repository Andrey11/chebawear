export const ON_ACTION = 'ON_ACTION'
export const onAction = (options) => (dispatch, getState) => {
  var test = dispatch;
  var test1 = getState;
  var test2 = options;

  dispatch({
    type: ON_ACTION
  })
}
