let internalNetworkCode: string | number = ''
const networkCode = {
    get: () => internalNetworkCode,
    set: (nc: string | number) => {internalNetworkCode = nc}
}

export { networkCode }