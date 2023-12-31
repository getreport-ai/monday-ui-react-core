import React from "react";
export type OnPressEventType<Element> = React.MouseEvent<Element> | React.FocusEvent<Element>;
export type GeneralEventType = Event | React.UIEvent;
export type GenericEventCallback = (ev: GeneralEventType) => unknown;
export type KeyboardEventCallback = (event: KeyboardEvent) => unknown;
export type MouseEventCallBack = (event: React.MouseEvent<HTMLElement | SVGElement>) => void;
