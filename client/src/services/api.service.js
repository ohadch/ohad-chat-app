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

    let url = buildUrl(endpoint, params)
    return fetch(url, requestOptions).then(handleResponse);
}


/**
 * Returns the url with the query string
 * @param { string } endpoint
 * @param { object } params
 */
function buildUrl(endpoint, params) {
    if (!params) return endpoint;

    const mockHost = "http://www.mockhost.com"
    const fullUrl = `${mockHost}${endpoint}`
    let url = new URL(fullUrl)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    let urlString = url.toString();
    return urlString.slice(mockHost.length)
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