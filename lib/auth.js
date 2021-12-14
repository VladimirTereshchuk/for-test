import React, { useState, useEffect, useContext, createContext } from "react";
import Router from "next/router";
import cookie from "js-cookie";

import firebase from "./firebase";
import { createUser } from "./db";
// import { createUser } from "./db";

const authContext = createContext();

export function AuthProvider({ children }) {
  // console.log(useProvideAuth());
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      // createUser(user.uid, user);
      // createUser(user.uid, userWithoutToken);

      setUser(user);

      cookie.set("fast-feedback-auth", true, {
        expires: 1,
      });

      // setLoading(false);
      return user;
    } else {
      cookie.remove("fast-feedback-auth");
      setUser(false);

      // setLoading(false);
      return false;
    }
  };

  const signinWithGoogle = (redirect) => {
    // setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
        Router.push("/dashboard");

        // if (redirect) {
        //   Router.push(redirect);
        // }
      });
  };

  const signout = () => {
    Router.push("/");

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
    // .then(() => Router.push("/"));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        handleUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,

    signinWithGoogle,
    signout,
  };
}

// const getStripeRole = async () => {
//   await firebase.auth().currentUser.getIdToken(true);
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

//   return decodedToken.claims.stripeRole || "free";
// };

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.ya,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    // stripeRole: await getStripeRole(),
  };
};
