import {AppRootStateType} from "./redux-store";

interface IRootState extends AppRootStateType {}

// export const selectDisable = (state: IRootState) => state.counter.disable;

export const selectStateCounter = (state: IRootState) => state.counter
