import { resolve } from "path";

export function linkUUID () {
    const _url = window.URL.createObjectURL(new Blob());
    window.URL.revokeObjectURL(_url);
    return _url.split('/').pop();
};



export function showMal(modalProps: unknown, apiProps: unknown) {
    return new Promise((resolve) => {resolve({data: 1})})
};