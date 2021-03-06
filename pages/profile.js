import { useEffect } from "react";

import { useAuth } from "@/lib/auth";

import { useRouter } from "next/router";

const Profile = () => {
  const auth = useAuth();
  const router = useRouter();
  const { user } = auth;

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Profile Page</h1>
      <div>
        {auth?.user && (
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={() => auth.signout()}
          >
            SingOut
          </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
