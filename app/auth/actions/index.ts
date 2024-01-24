"use server";
import { createSupabaseServerClient } from "@/lib/supabase";

export const createMember = async (data: {
  email: string;
  password: string;
}) => {
  const supabase = await createSupabaseServerClient();
  const createuser = await supabase.auth.signUp(data);
  if (createuser.error?.message) {
    return JSON.stringify(createuser.error.message);
  } else {
    return JSON.stringify(createuser);
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  const supabase = await createSupabaseServerClient();
  const loginUser = await supabase.auth.signInWithPassword(data);
  if (loginUser.error?.message) {
    return JSON.stringify(loginUser.error.message);
  } else {
    return JSON.stringify(loginUser);
  }
};

export const logoutUser = async () => {
  const supabase = await createSupabaseServerClient();
  const usersignout = await supabase.auth.signOut();
  if (usersignout.error?.message) {
    return JSON.stringify(usersignout.error.message);
  } else {
    return JSON.stringify(usersignout);
  }
};
