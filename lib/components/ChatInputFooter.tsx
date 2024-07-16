import TextareaAutosize from "react-textarea-autosize";
import { AlertTriangle, RotateCcw, SendHorizonal } from "lucide-react";
import { useRef, useState } from "react";
import {
  useCanSend,
  useChatState,
  useDocumentDirection,
  useSendMessage,
} from "@lib/hooks";
import { VoiceRecorder } from "./VoiceRecorder";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./Dialog";
import { Button } from "./Button";
import { useLang, useMessageHandler } from "@lib/contexts";
import cn from "@lib/utils/cn";

function ResetButtonWithConfirmation() {
  const { __handler: mh } = useMessageHandler();
  const [open, setOpen] = useState(false);
  const { get } = useLang();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <RotateCcw className="size-[1em]" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="mx-auto flex flex-col items-center justify-center">
            <span className="text-rose-500">
              <AlertTriangle className="size-10" />
            </span>
            <h2>{get("are-you-sure")}</h2>
          </div>
        </DialogHeader>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button
            asChild
            variant="destructive"
            className="font-semibold"
            onClick={mh.reset}
          >
            <DialogClose>{get("yes-reset")}</DialogClose>
          </Button>
          <Button asChild variant="secondary" className="font-semibold">
            <DialogClose>{get("no-cancel")}</DialogClose>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
function SuggestedQuestionsRenderer() {
  const { initialData } = useMessageHandler();
  const { send } = useSendMessage();
  const messages = useChatState();
  const isEmpty = messages.messages.length === 0;
  return !isEmpty ? null : (
    <div className="flex items-center gap-1 overflow-auto pb-2">
      {initialData?.initial_questions.map((question, index) => {
        return (
          <button
            key={index}
            onClick={() => send(question)}
            className="font-normal text-sm whitespace-nowrap px-2 py-1 bg-accent rounded-lg"
          >
            {question}
          </button>
        );
      })}
    </div>
  );
}
export function ChatInputFooter() {
  const [input, setInput] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { send } = useSendMessage();
  const { direction } = useDocumentDirection();
  const { canSend } = useCanSend({ input });

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.currentTarget.value;
    setInput(value);
  };

  function handleInputSubmit() {
    if (canSend) {
      setInput("");
      send(input);
    }
  }

  return (
    <footer className="p-2 flex w-full flex-col gap-2">
      <SuggestedQuestionsRenderer />

      <div
        className={cn(
          "w-full flex items-center transition-colors justify-between overflow-hidden gap-2 bg-accent p-2 rounded-xl"
        )}
      >
        <div className="flex-1">
          <TextareaAutosize
            dir="auto"
            ref={textAreaRef}
            autoFocus={true}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleInputSubmit();
              }
            }}
            maxRows={4}
            rows={1}
            value={input}
            onChange={handleTextareaChange}
            className=" w-full resize-none bg-transparent focus-visible:outline-none border-none focus:outline-none focus:border-none scrollbar-thin leading-tight whitespace-pre-wrap p-2 placeholder:align-middle overflow-auto outline-none text-accent2 text-sm placeholder:text-xs font-normal"
          />
        </div>
        <div
          dir={direction}
          className="flex items-center justify-center gap-2 h-fit px-2 text-base"
        >
          <ResetButtonWithConfirmation />
          <VoiceRecorder onSuccess={(text) => setInput(text)} />
          <button
            onClick={handleInputSubmit}
            id="send_chat_button"
            disabled={!canSend}
            className={cn(
              "disabled:pointer-events-none disabled:cursor-not-allowed transition-all",
              !canSend ? "text-rose-500" : " text-[#5e5c5e]"
            )}
          >
            <SendHorizonal className="rtl:rotate-180 size-[1em]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
