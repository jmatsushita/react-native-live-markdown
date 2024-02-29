declare function setCursorPosition(target: HTMLElement, targetPosition: number, ignoreNewLines?: boolean): void;
declare function moveCursorToEnd(target: HTMLElement): void;
declare function getCurrentCursorPosition(target: HTMLElement): {
    start: number;
    end: number;
};
export { getCurrentCursorPosition, moveCursorToEnd, setCursorPosition };
//# sourceMappingURL=cursorUtils.d.ts.map