namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        NEXTAUTH_URL: string;
        NEXTAUTH_SECRET: string;
        GITHUB_ID: string;
        GITHUB_SECRET: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        MONGODB_URL: string;
    }
}
