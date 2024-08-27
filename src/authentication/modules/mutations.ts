import { useMutation } from "@tanstack/react-query";
import supabase from "../../supabase/client";
import type { TLoginFormValues, TSignupFormValues } from "./hooks";

export const useLoginWithEmail = () =>
  useMutation({
    mutationFn: async (formValues: TLoginFormValues) => {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: formValues.email,
        password: formValues.password,
      });
      if (error) throw error;
      return data;
    },
  });

export const useSignupWithEmail = () =>
  useMutation({
    mutationFn: async (formValues: TSignupFormValues) => {
      const { error, data } = await supabase.auth.signUp({
        email: formValues.email,
        password: formValues.password,
        options: {
          data: {
            fullName: formValues.full_name,
          },
        },
      });
      if (error) throw error;
      return data;
    },
  });
