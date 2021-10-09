import { AlignType } from './types';

export function ConvertAlignTypeToString(alignType: AlignType): string {
    switch (alignType) {
        case AlignType.Left:
            return "left";
        case AlignType.Right:
            return "right";
        case AlignType.Center:
            return "center";
    }
}