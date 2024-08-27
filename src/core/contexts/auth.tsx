import type { Session, User } from "@supabase/supabase-js";
import type { FC, PropsWithChildren } from "react";
import { createContext, useEffect, useState } from "react";
import supabase from "../../supabase/client";

type TAuthContext = {
  user: User | null;
  session: Session | null;
  isLoadingAuth: boolean;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TAuthContext["user"]>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [session, setSession] = useState<TAuthContext["session"]>(null);

  useEffect(() => {
    supabase.auth.getUser().then((user) => {
      setUser(user.data.user);
      setIsLoadingAuth(false);
    });
    supabase.auth.getSession().then((session) => setSession(session.data.session));
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      setSession(session);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, isLoadingAuth }}>{children}</AuthContext.Provider>
  );
};
