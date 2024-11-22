import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../app/store/store";

export const useSelectorType: TypedUseSelectorHook<RootState> = useSelector;
