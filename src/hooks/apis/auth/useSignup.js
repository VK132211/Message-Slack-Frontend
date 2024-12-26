import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/apis/auth";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Successfull Signup", data);
    },
    onError: (error) => {
      console.log("Failed to Signup", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
