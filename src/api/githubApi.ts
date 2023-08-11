import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer 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'
    },
});