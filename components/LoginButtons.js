import { useAuth } from "@/lib/auth";

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <button
      style={{ backgroundColor: "grey" }}
      onClick={() => auth.signinWithGoogle()}
    >
      Continue with Google
    </button>
  );
};

export default LoginButtons;
