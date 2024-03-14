// This is the Route Handler file for the auth0 API route 
import { handleAuth } from "@auth0/nextjs-auth0";

export const GET = handleAuth();
