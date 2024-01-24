import React from "react";
import Signup from "../components/SignUpForm";
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
      <Signup />
    </div>
  );
};

export default page;
