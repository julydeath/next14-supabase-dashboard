import React from "react";
import Login from "../components/LogInForm";
import { createSupabaseServerClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

const page = async () => {
  const supabase = await createSupabaseServerClient();
  const { data: user, error } = await supabase.auth.getSession();
  if (user?.session) {
    redirect("/");
  }
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
