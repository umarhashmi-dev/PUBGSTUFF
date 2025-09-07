
"use client";
import { createContext, useEffect, useState } from "react";
import type { AuthSession, AuthUser } from "@supabase/supabase-js";

export type AuthContext = {
  user: AuthUser | null;
  session: AuthSession | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContext>({
  user: null,
  session: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Since Supabase is removed, we'll simulate a logged-out state.
  useEffect(() => {
    setUser(null);
    setSession(null);
    setLoading(false);
  }, []);

  const value = {
    user,
    session,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
