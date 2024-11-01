import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// here thunk is the custom thunk we make for CRUD operation with servers
export function useThunk(thunk) {
  /*
    this loading and error states makes sure to indicate the
    pending/fulfilled/rejected status of thunk request
    */

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // useCallback will keep the function reference same as the first one
  const runThunk = useCallback(
    (arg) => {
      // arg is for deleting users
      setIsLoading(true);
      //   if unwrap is not used the promise we get from dispatch will not --
      //   -- send error to catch but instead it to what then is doing
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
      // BAD!!!
      // setIsLoadingUsers(false)
    },
    [dispatch, thunk]
  );
  return [runThunk, isLoading, error];
}

/*
NOTE:
  as usethunk() is being called multiple time and will cause re-render because
  state is changing we do not want to re-create the usethunk() function to get
  re-created again which will make new states + the old rendered states exist
  at the same time, new state is created --> we get into the process of
  pending/fulfilled/rejected then state(isLoading and error) is updated
  make the state change --> causing re-render -> again new useThunk+states
  --> SourceBuffer, we will never see the end of states final value. Keeping
  the useThunk() function reference same for all CRUD makes no new states
  after re-render then the state can actually have a final results/form
  */
