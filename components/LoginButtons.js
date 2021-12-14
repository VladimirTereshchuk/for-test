import { useAuth } from "@/lib/auth";

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <button
      style={{
        backgroundColor: "blue",
        cursor: "pointer",
        color: "white",
        fontSize: "1rem",
      }}
      onClick={() => auth.signinWithGoogle()}
    >
      SignIn with Google
    </button>
  );
};

export default LoginButtons;
