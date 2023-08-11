import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer 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'
    },
});