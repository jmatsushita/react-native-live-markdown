"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRangesToHTMLNodes = parseRangesToHTMLNodes;
exports.parseText = parseText;
var CursorUtils = _interopRequireWildcard(require("./cursorUtils"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function addStyling(targetElement, type, markdownStyle) {
  const node = targetElement;
  switch (type) {
    case 'syntax':
      Object.assign(node.style, markdownStyle.syntax);
      break;
    case 'bold':
      node.style.fontWeight = 'bold';
      break;
    case 'italic':
      node.style.fontStyle = 'italic';
      break;
    case 'strikethrough':
      node.style.textDecoration = 'line-through';
      break;
    case 'mention-here':
      Object.assign(node.style, markdownStyle.mentionHere);
      break;
    case 'mention-user':
      Object.assign(node.style, markdownStyle.mentionUser);
      break;
    case 'link':
      Object.assign(node.style, {
        ...markdownStyle.link,
        textDecoration: 'underline'
      });
      break;
    case 'code':
      Object.assign(node.style, markdownStyle.code);
      break;
    case 'pre':
      Object.assign(node.style, markdownStyle.pre);
      break;
    case 'blockquote':
      Object.assign(node.style, {
        ...markdownStyle.blockquote,
        borderLeftStyle: 'solid',
        display: 'inline-block',
        maxWidth: '100%',
        boxSizing: 'border-box'
      });
      break;
    case 'h1':
      Object.assign(node.style, {
        ...markdownStyle.h1,
        fontWeight: 'bold'
      });
      break;
    default:
      break;
  }
}
function addSubstringAsTextNode(root, text, startIndex, endIndex) {
  const substring = text.substring(startIndex, endIndex);
  if (substring.length > 0) {
    root.appendChild(document.createTextNode(substring));
  }
}
function ungroupRanges(ranges) {
  const ungroupedRanges = [];
  ranges.forEach(range => {
    if (!range.depth) {
      ungroupedRanges.push(range);
    }
    const {
      depth,
      ...rangeWithoutDepth
    } = range;
    Array.from({
      length: depth
    }).forEach(() => {
      ungroupedRanges.push(rangeWithoutDepth);
    });
  });
  return ungroupedRanges;
}
function parseRangesToHTMLNodes(text, ranges, markdownStyle = {}, disableInlineStyles = false) {
  const root = document.createElement('span');
  root.className = 'root';
  const textLength = text.length;
  if (ranges.length === 0) {
    addSubstringAsTextNode(root, text, 0, textLength);
    return root;
  }
  const stack = ungroupRanges(ranges);
  const nestedStack = [{
    node: root,
    endIndex: textLength
  }];
  let lastRangeEndIndex = 0;
  while (stack.length > 0) {
    const range = stack.shift();
    if (!range) {
      break;
    }
    let currentRoot = nestedStack[nestedStack.length - 1];
    if (!currentRoot) {
      break;
    }
    const endOfCurrentRange = range.start + range.length;
    const nextRangeStartIndex = stack.length > 0 && !!stack[0] ? stack[0].start || 0 : textLength;
    addSubstringAsTextNode(currentRoot.node, text, lastRangeEndIndex, range.start); // add text with newlines before current range

    const span = document.createElement('span');
    if (disableInlineStyles) {
      span.className = range.type;
    } else {
      addStyling(span, range.type, markdownStyle);
    }
    if (stack.length > 0 && nextRangeStartIndex < endOfCurrentRange && range.type !== 'syntax') {
      // tag nesting
      currentRoot.node.appendChild(span);
      nestedStack.push({
        node: span,
        endIndex: endOfCurrentRange
      });
      lastRangeEndIndex = range.start;
    } else {
      addSubstringAsTextNode(span, text, range.start, endOfCurrentRange);
      currentRoot.node.appendChild(span);
      lastRangeEndIndex = endOfCurrentRange;

      // end of tag nesting
      while (nestedStack.length - 1 > 0 && nextRangeStartIndex >= currentRoot.endIndex) {
        addSubstringAsTextNode(currentRoot.node, text, lastRangeEndIndex, currentRoot.endIndex);
        const prevRoot = nestedStack.pop();
        if (!prevRoot) {
          break;
        }
        lastRangeEndIndex = prevRoot.endIndex;
        currentRoot = nestedStack[nestedStack.length - 1] || currentRoot;
      }
    }
  }
  if (nestedStack.length > 1) {
    const lastNestedNode = nestedStack[nestedStack.length - 1];
    if (lastNestedNode) {
      root.appendChild(lastNestedNode.node);
    }
  }
  addSubstringAsTextNode(root, text, lastRangeEndIndex, textLength);
  return root;
}
function parseText(target, text, curosrPositionIndex, markdownStyle = {}, disableNewLinesInCursorPositioning = false, alwaysMoveCursorToTheEnd = false) {
  const targetElement = target;
  let cursorPosition = curosrPositionIndex;
  const isFocused = document.activeElement === target;
  if (isFocused && curosrPositionIndex === null) {
    cursorPosition = CursorUtils.getCurrentCursorPosition(target).start;
  }
  const ranges = global.parseExpensiMarkToRanges(text);
  const markdownRanges = ranges;
  targetElement.innerHTML = '';
  targetElement.innerText = '';

  // We don't want to parse text with single '\n', because contentEditable represents it as invisible <br />
  if (!!text && text !== '\n') {
    const dom = parseRangesToHTMLNodes(text, markdownRanges, markdownStyle);
    target.appendChild(dom);
  }
  if (alwaysMoveCursorToTheEnd) {
    CursorUtils.moveCursorToEnd(target);
  } else if (isFocused && cursorPosition !== null) {
    CursorUtils.setCursorPosition(target, cursorPosition, disableNewLinesInCursorPositioning);
  }
  return {
    text: target.innerText,
    cursorPosition: cursorPosition || 0
  };
}
//# sourceMappingURL=parserUtils.js.map