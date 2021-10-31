import { AlignType } from './types';

const typeStrings = ["left", "right", "center"];
export function ConvertAlignTypeToString(alignType: AlignType): string {
    return typeStrings[alignType];
}