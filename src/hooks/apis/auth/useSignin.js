import { useMutation } from "@tanstack/react-query";

import { signInRequest } from "@/apis/auth";

import { useToast } from "@/hooks/use-toast";

export const useSignin = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log("Successfull signIn", data);
      toast({
        title: "signIn Success",
        message: "you will be redirected to home page in few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("Failed to signIn", error);
      toast({
        title: "signIn Failed",
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
    signinMutation,
  };
};
