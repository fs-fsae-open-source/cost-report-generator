import { FastenerType, Part } from "./part";

export interface crgState {
    fastenerTypes: { [key: number]: FastenerType };
    currentPart: Part
}