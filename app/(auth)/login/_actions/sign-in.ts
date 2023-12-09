"use server";

import { Response } from "@/types/response";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: {
        type: "Could not authenticate user.",
        message: "Verify the email and password, and try again.",
      },
      status: 500,
    } as Response;
  }

  return redirect("/dashboard");
};
