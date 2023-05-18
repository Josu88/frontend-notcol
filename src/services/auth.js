import { supabase } from "../api/config";

export const signIn = async () => {
  const data = await supabase.auth.signInWithPassword({
    email: process.env.REACT_APP_SUPABASE_EMAIL,
    password: process.env.REACT_APP_SUPABASE_PASSWORD,
  });
  return data;
};

export const logout = async () => {
  const result = await supabase.auth.signOut();
  return result;
};
