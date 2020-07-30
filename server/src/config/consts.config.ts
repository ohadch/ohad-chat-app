import * as dotenv from "dotenv"
dotenv.config()

export const PORT : string = safeResolveEnvironmentVariable("PORT");
export const MONGO_URI : string = safeResolveEnvironmentVariable("MONGO_URI");
export const MONGO_USER : string = safeResolveEnvironmentVariable("MONGO_USER");
export const MONGO_PASSWORD : string = safeResolveEnvironmentVariable("MONGO_PASSWORD");

function safeResolveEnvironmentVariable(variableName: string) : string {
    if (!process.env[variableName]) {
        throw new Error(`${variableName} environment variable must be provided.`)
    }

    return process.env[variableName] as string;
}