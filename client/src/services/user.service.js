import apiService from "./api.service";

export default {
    signUp,
    login
}

async function signUp({firstName, lastName, email, nickname}) {
    const { user } = await apiService.request("POST", "/api/user/signup", {
        body: {firstName, lastName, email, nickname}
    });
    return user;
}

async function login({email}) {
    const { user } = await apiService.request("POST", "/api/user/login", {
        body: {email}
    });

    return user;
}