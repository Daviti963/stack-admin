import { atom } from "jotai";

export const isCloseState = atom<boolean>(false);

// input
export const textState = atom<string>('');

// burgerMenu

export const isOpenState = atom<boolean>(false);