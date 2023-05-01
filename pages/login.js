import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  // console.log("SESSION", session);
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          providers={["github", "google"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="white"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Login;
