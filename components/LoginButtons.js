import { useAuth } from "@/lib/auth";

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <button
      style={{ backgroundColor: "grey" }}
      onClick={() => auth.signinWithGoogle()}
    >
      Sign with Google
    </button>
  );
};

export default LoginButtons;
