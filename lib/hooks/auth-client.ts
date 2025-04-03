import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
  plugins: [adminClient()],
});

export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "discord",

    callbackURL: "/",

    errorCallbackURL: "/error",

    newUserCallbackURL: "/welcome",
  });
};
