import { MessageTypeEnum } from "@lib/hooks/parse-structured-response";
import { WidgetOptions } from "./options";

export type UserMessageType = {
  type: "FROM_USER";
  id: string;
  content: string;
  timestamp: string;
  session_id: string;
  serverId?: string;
  user?: {
    name?: string;
    email?: string;
    phone?: string;
    customData?: Record<string, string>;
    avatarUrl?: string;
  };
};

export type BotMessageType<TData = unknown> = {
  id: string;
  type: "FROM_BOT";
  component: string;
  responseFor: string | null;
  data: TData;
  bot?: WidgetOptions["bot"];
  serverId: number | null;
  agent?: {
    name?: string;
    is_ai: boolean;
  };
};

export type HandoffPayloadType = {
  summary: string;
  sentiment: "happy" | "angry" | "neutral";
};

export type MessageType = UserMessageType | BotMessageType
