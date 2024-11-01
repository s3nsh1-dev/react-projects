import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      // arg is for deleting users
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
