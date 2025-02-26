import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/apis/auth";

import { useToast } from "@/hooks/use-toast";

export const useSignup = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Successfull Signup", data);
      toast({
        title: "Signup Success",
        message: "you will be redirected to login page in few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("Failed to Signup", error);
      toast({
        title: "Signup Failed",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
