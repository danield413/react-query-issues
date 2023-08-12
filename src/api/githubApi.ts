import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer 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'
    },
});