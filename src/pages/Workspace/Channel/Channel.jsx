import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { Message } from "@/components/molecules/Message/Message";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages";
import { useChannelMessages } from "@/hooks/context/useChannelMessages";
import { useSocket } from "@/hooks/context/useSocket";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Channel = () => {
  const { channelId } = useParams();
  const queryClient = useQueryClient();
  const { isFetching, isError, channelDetails } = useGetChannelById(channelId);

  const { joinChannel } = useSocket();

  const { messageList, setMessageList } = useChannelMessages();
  const { messages, isSuccess } = useGetChannelMessages(channelId);

  useEffect(() => {
    queryClient.invalidateQueries("getPaginatedMessages");
  }, [channelId]);

  useEffect(() => {
    if (!isFetching && !isError) {
      joinChannel(channelId);
    }
  }, [isFetching, isError, joinChannel, channelId]);

  useEffect(() => {
    if (isSuccess) {
      setMessageList(messages);
    }
  }, [isSuccess, messages, setMessageList, channelId]);

  if (isFetching) {
    return (
      <div className="h-full flex flex-1 justify-center items-center ">
        <Loader2Icon className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
        <TriangleAlertIcon className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Channel Not Found</span>
      </div>
    );
  }
  return (
    <div className="h-full flex flex-col">
      <ChannelHeader name={channelDetails?.name} />

      {messageList?.reverse().map((message) => {
        return (
          <Message
            key={message._id}
            body={message.body}
            authorImage={message.senderId?.avatar}
            authorName={message.senderId?.username}
            createdAt={message.createdAt}
          />
        );
      })}

      <div className="flex-1" />
      <ChatInput />
    </div>
  );
};
