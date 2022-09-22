export const userAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken') !== "undefined" ? JSON.parse(localStorage.getItem('accessToken')) : localStorage.clear();
    return accessToken;
}

