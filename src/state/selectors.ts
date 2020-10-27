import {AppRootStateType} from "./redux-store";

interface IRootState extends AppRootStateType {}

export const selectStateCounter = (state: IRootState) => state.counter
