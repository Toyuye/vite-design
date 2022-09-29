function linkUUID () {
    const _url = window.URL.createObjectURL(new Blob());
    window.URL.revokeObjectURL(_url);
    return _url.split('/').pop();
};