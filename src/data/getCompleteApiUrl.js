function getCompleteApiUrl(config, route) {
    if (config.isStandalone) {
        return "//" + config.apiAddr + config.apiRoute + route;
    } else {
        return config.apiRoute + route;
    }
}

export default getCompleteApiUrl;