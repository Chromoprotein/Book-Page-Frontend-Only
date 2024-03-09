const returnAfterTimeout = (navigate, page) => {
    return setTimeout(() => {
        navigate(page);
    }, 2000);
}
export default returnAfterTimeout;