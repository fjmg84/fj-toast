export const uuid = () => {
    let dt = new Date().getTime();

    return `${Math.floor(dt * Math.random() * 16)}-${Math.floor(dt * Math.random() * 16)}-${dt}`

    /* return 'xxxxxxxx-xxxx-4yxxx-yxxx-xxxxxxxx'.replace(
        /[xy]/g, (c) => {
            let r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
        }
    ) */
}