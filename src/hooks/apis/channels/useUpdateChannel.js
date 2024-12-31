import { updateChannelRequest } from "@/apis/channels";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useUpdateChannel = (channelId) => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: updateChannelMutation,
  } = useMutation({
    mutationFn: (name) => updateChannelRequest({ channelId, name, token: auth?.token }),
    onSuccess: () => {
      console.log("Channel updated successfully");
    },
    onError: (error) => {
      console.log("Error in updating channel", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    updateChannelMutation,
  };
};
