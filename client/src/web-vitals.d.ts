/// <reference types="react-scripts" />
declare module 'web-vitals' {
    export type Metric = {
        name: string;
        value: number;
        label?: string;
        id?: string;
    };

    export function getCLS(onPerfEntry?: (metric: Metric) => void): void;
    export function getFID(onPerfEntry?: (metric: Metric) => void): void;
    export function getFCP(onPerfEntry?: (metric: Metric) => void): void;
    export function getLCP(onPerfEntry?: (metric: Metric) => void): void;
    export function getTTFB(onPerfEntry?: (metric: Metric) => void): void;
}
