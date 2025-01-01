import { Editor } from "@/components/atoms/Editor/Editor";

async function handleSubmit({ body }) {
  console.log(body);
}
export const ChatInput = () => {
  return (
    <div>
      <Editor onSubmit={handleSubmit} />
    </div>
  );
};
