import {LOCALSTORAGE_KEY_AUTH_TOKEN} from "../consts";

export default {
    request
}

/**
 *
 * @param { string } method
 * @param { string } endpoint
 * @param { object|undefined } params
 * @param { object|undefined } body
 * @returns {Promise<Response>}
 */
async function request(method, endpoint, {params, body} = {}) {
    const requestOptions = {
        method: method.toUpperCase(),
        headers: getDefaultHeaders()
    };

    if (["POST", "PUT", "DELETE"].includes(method.toUpperCase())) {
        requestOptions.body = JSON.stringify(body);
    }

    const host = "http://localhost:8000"
    const fullUrl = `${host}${endpoint}`
    let url = new URL(fullUrl)
    Object.keys(params || {}).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url.toString(), requestOptions).then(handleResponse);
}


function getDefaultHeaders() {
    const options = {"Content-Type": "application/json"}
    const authToken = sessionStorage.getItem(LOCALSTORAGE_KEY_AUTH_TOKEN)

    if (authToken) {
        options.token = authToken;
    }

    return options;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(`${text}`);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}