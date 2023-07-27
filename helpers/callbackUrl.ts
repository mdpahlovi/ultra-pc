export default function callbackUrl(callbackUrl: string | undefined): string {
    return callbackUrl ? callbackUrl : "http://localhost:3000/";
}
