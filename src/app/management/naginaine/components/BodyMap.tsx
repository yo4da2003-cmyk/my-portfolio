"use client";

import React from "react";

function renderRegionShape(shape: React.ReactNode, active: boolean, isFront: boolean): React.ReactNode {
  const activeFill = "rgba(217,79,79,0.55)";
  const activeStroke = "#b83232";
  const normalFill = isFront ? "rgba(240,160,96,0.22)" : "rgba(220,140,80,0.18)";
  const normalStroke = isFront ? "#e07b2a" : "#c05f10";

  if (!shape) return null;

  function applyStyle(node: React.ReactNode): React.ReactNode {
    if (!node || typeof node !== "object") return node;
    const el = node as React.ReactElement<React.SVGProps<SVGElement>>;
    if (!el.props) return node;

    const tag = el.type;
    const isDecoration =
      el.props.pointerEvents === "none" ||
      (el.props as { fill?: string }).fill === "none";
    if (isDecoration) return el;

    const children = el.props.children
      ? Array.isArray(el.props.children)
        ? el.props.children.map(applyStyle)
        : applyStyle(el.props.children)
      : undefined;

    const isShape = tag === "ellipse" || tag === "rect" || tag === "path" || tag === "circle";
    if (isShape) {
      return {
        ...el,
        props: {
          ...el.props,
          fill: active ? activeFill : normalFill,
          stroke: active ? activeStroke : normalStroke,
          strokeWidth: active ? "2.5" : "1.5",
          children,
        },
      };
    }
    if (children !== undefined) return { ...el, props: { ...el.props, children } };
    return el;
  }

  if (Array.isArray(shape)) return shape.map(applyStyle);
  return applyStyle(shape);
}

export function FrontSVG({ selected, onToggle }: { selected: Set<string>; onToggle: (part: string) => void }) {
  const regions: { part: string; shape: React.ReactNode }[] = [
    {
      part: "頭部",
      shape: (
        <>
          <ellipse cx="70" cy="26" rx="22" ry="24" />
          <ellipse cx="63" cy="24" rx="3" ry="2" fill="rgba(80,140,100,0.3)" pointerEvents="none" />
          <ellipse cx="77" cy="24" rx="3" ry="2" fill="rgba(80,140,100,0.3)" pointerEvents="none" />
          <path d="M65 32 Q70 36 75 32" fill="none" stroke="rgba(80,140,100,0.35)" strokeWidth="1.2" pointerEvents="none" />
        </>
      ),
    },
    { part: "首・頸部", shape: <rect x="62" y="49" width="16" height="14" rx="4" /> },
    { part: "左肩", shape: <ellipse cx="30" cy="72" rx="17" ry="11" /> },
    { part: "右肩", shape: <ellipse cx="110" cy="72" rx="17" ry="11" /> },
    { part: "左胸部", shape: <path d="M46 63 Q70 58 70 63 L70 108 Q42 108 42 108 Q40 80 46 63 Z" /> },
    { part: "右胸部", shape: <path d="M70 63 Q94 63 94 63 Q100 80 98 108 L70 108 Z" /> },
    { part: "左腹部", shape: <path d="M42 108 Q70 114 70 108 L70 148 Q70 154 44 148 Z" /> },
    { part: "右腹部", shape: <path d="M70 108 Q98 108 98 108 L96 148 Q70 154 70 148 Z" /> },
    { part: "骨盤・股関節", shape: <path d="M44 148 Q70 154 96 148 Q100 162 96 178 Q70 180 44 178 Q40 162 44 148 Z" /> },
    { part: "左上腕", shape: <rect x="11" y="68" width="19" height="42" rx="9" /> },
    { part: "右上腕", shape: <rect x="110" y="68" width="19" height="42" rx="9" /> },
    { part: "左肘・前腕", shape: <rect x="10" y="110" width="17" height="38" rx="7" /> },
    { part: "右肘・前腕", shape: <rect x="113" y="110" width="17" height="38" rx="7" /> },
    { part: "左手首・手", shape: <ellipse cx="19" cy="161" rx="10" ry="13" /> },
    { part: "右手首・手", shape: <ellipse cx="121" cy="161" rx="10" ry="13" /> },
    { part: "左太もも", shape: <path d="M44 180 Q56 178 64 182 L62 228 Q54 232 44 228 Z" /> },
    { part: "右太もも", shape: <path d="M76 182 Q84 178 96 180 L96 228 Q86 232 78 228 Z" /> },
    { part: "左ひざ", shape: <ellipse cx="53" cy="234" rx="12" ry="8" /> },
    { part: "右ひざ", shape: <ellipse cx="87" cy="234" rx="12" ry="8" /> },
    { part: "左すね・足首", shape: <path d="M42 242 L64 242 L62 280 Q53 284 44 280 Z" /> },
    { part: "右すね・足首", shape: <path d="M76 242 L98 242 L96 280 Q87 284 78 280 Z" /> },
  ];

  return (
    <svg className="body-svg" width="130" height="300" viewBox="0 0 140 300">
      <line x1="70" y1="63" x2="70" y2="108" stroke="rgba(80,140,100,0.35)" strokeWidth="1.2" pointerEvents="none" />
      <line x1="70" y1="108" x2="70" y2="148" stroke="rgba(80,140,100,0.35)" strokeWidth="1.2" pointerEvents="none" />
      {regions.map(({ part, shape }) => (
        <g key={part} className="body-region" onClick={() => onToggle(part)} style={{ cursor: "pointer" }}>
          {renderRegionShape(shape, selected.has(part), true)}
        </g>
      ))}
    </svg>
  );
}

export function BackSVG({ selected, onToggle }: { selected: Set<string>; onToggle: (part: string) => void }) {
  const regions: { part: string; shape: React.ReactNode }[] = [
    {
      part: "後頭部",
      shape: (
        <>
          <ellipse cx="70" cy="26" rx="22" ry="24" />
          <path d="M52 36 Q60 44 70 46 Q80 44 88 36" fill="none" stroke="rgba(60,120,80,0.3)" strokeWidth="1.5" pointerEvents="none" />
        </>
      ),
    },
    { part: "首の後ろ", shape: <rect x="62" y="49" width="16" height="14" rx="4" /> },
    { part: "左背中（上部）", shape: <path d="M46 63 Q70 60 70 63 L70 108 Q44 108 44 108 Q42 80 46 63 Z" /> },
    { part: "右背中（上部）", shape: <path d="M70 63 Q94 63 94 63 Q98 80 96 108 L70 108 Z" /> },
    { part: "左腰", shape: <path d="M44 108 Q70 112 70 108 L70 148 Q70 152 46 148 Z" /> },
    { part: "右腰", shape: <path d="M70 108 Q96 108 96 108 L94 148 Q70 152 70 148 Z" /> },
    { part: "お尻・仙骨", shape: <path d="M42 148 Q70 152 98 148 Q104 162 100 180 Q85 188 70 186 Q55 188 40 180 Q36 162 42 148 Z" /> },
    { part: "左上腕", shape: <rect x="11" y="68" width="19" height="42" rx="9" /> },
    { part: "右上腕", shape: <rect x="110" y="68" width="19" height="42" rx="9" /> },
    { part: "左肘・前腕", shape: <rect x="10" y="110" width="17" height="38" rx="7" /> },
    { part: "右肘・前腕", shape: <rect x="113" y="110" width="17" height="38" rx="7" /> },
    { part: "左太もも", shape: <path d="M40 186 Q54 182 64 186 L62 230 Q52 234 42 230 Z" /> },
    { part: "右太もも", shape: <path d="M76 186 Q86 182 100 186 L98 230 Q88 234 78 230 Z" /> },
    { part: "左ひざ", shape: <ellipse cx="52" cy="236" rx="12" ry="8" /> },
    { part: "右ひざ", shape: <ellipse cx="88" cy="236" rx="12" ry="8" /> },
    { part: "左ふくらはぎ", shape: <path d="M40 244 Q54 242 64 244 Q66 260 62 280 Q52 284 42 280 Q38 260 40 244 Z" /> },
    { part: "右ふくらはぎ", shape: <path d="M76 244 Q90 242 100 244 Q102 260 98 280 Q88 284 78 280 Q74 260 76 244 Z" /> },
  ];

  return (
    <svg className="body-svg" width="130" height="300" viewBox="0 0 140 300">
      <line x1="70" y1="63" x2="70" y2="108" stroke="rgba(60,120,80,0.35)" strokeWidth="1.2" pointerEvents="none" />
      <line x1="70" y1="108" x2="70" y2="148" stroke="rgba(60,120,80,0.35)" strokeWidth="1.2" pointerEvents="none" />
      {regions.map(({ part, shape }) => (
        <g key={part} className="body-region" onClick={() => onToggle(part)} style={{ cursor: "pointer" }}>
          {renderRegionShape(shape, selected.has(part), false)}
        </g>
      ))}
    </svg>
  );
}
