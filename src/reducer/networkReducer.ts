// State

// To know more about Record type, see https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt
export type LoadingState = Record<string, "pending" | "fufilled" | "rejected">;

// Reducer

export default (state: LoadingState = {}, action: any): LoadingState => {
  const { type } = action;

  const matches = /(.*)\/(pending|fulfilled|rejected)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes:
  //   ['/REQUEST', '/SUCCESS', '/FAILURE']
  if (!matches) return state;

  const [, routineType, status] = matches;
  return {
    ...state,
    // Set loading state to true only when the status is "REQUEST"
    //    Otherwise set the loading state to false
    [routineType]: status as "pending" | "fufilled" | "rejected",
  };
};
