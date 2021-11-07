import { AlignType } from './types';

const typeStrings = ["text-left", "text-right", "text-center"];
export function ConvertAlignTypeToString(alignType: AlignType): string {
    return typeStrings[alignType];
}