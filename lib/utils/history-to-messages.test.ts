import { ChatHistoryMessageType } from "@lib/types/schemas.backend";
import { describe, expect, it } from "vitest";
import { historyToWidgetMessages } from "./history-to-widget-messages";

const sampleData: ChatHistoryMessageType[] = [
    {
        id: 164240,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: true,
        message: "I need help",
        created_at: "2024-09-30T17:28:21.000Z",
        updated_at: "2024-09-30T17:28:21.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "message",
        agent_id: null,
        agent_name: null,
        agent_avatar: "",
        handoff_happened_during_office_hours: false,
    },
    {
        id: 164241,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message:
            "Hi there! How can I assist you today with your Mollie account or services? Let me know what you need help with, and I'll do my best to assist you.",
        created_at: "2024-09-30T17:28:25.000Z",
        updated_at: null,
        debug_json: { calledActions: [], actionSearchQuery: "help", knowledge: [] },
        api_called: false,
        knowledgebase_called: true,
        extra_params: {},
        type: "message",
        agent_id: null,
        agent_name: null,
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165176,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: true,
        message: "hi there ",
        created_at: "2024-10-05T23:51:59.000Z",
        updated_at: "2024-10-05T23:51:59.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "message",
        agent_id: null,
        agent_name: null,
        agent_avatar: "",
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165177,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message:
            "Hi! How can I assist you today with your Mollie account or services? If you have any questions or need help with something specific, just let me know!",
        created_at: "2024-10-05T23:52:03.000Z",
        updated_at: null,
        debug_json: {
            actionCalls: [],
            actionSearchQuery: "help, Mollie account, services, assist",
            knowledge: [],
        },
        api_called: false,
        knowledgebase_called: true,
        extra_params: {},
        type: "message",
        agent_id: null,
        agent_name: null,
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165178,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message: "Agent Ahmad Falta took over the chat from the AI agent",
        created_at: "2024-10-05T23:52:35.000Z",
        updated_at: "2024-10-05T23:52:35.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "agent_took_session_from_ai",
        agent_id: 9000002,
        agent_name: "Ahmad Falta",
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165179,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message: "help me please!",
        created_at: "2024-10-05T23:52:35.000Z",
        updated_at: "2024-10-05T23:52:35.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "agent_message",
        agent_id: 9000002,
        agent_name: "Ahmad Falta",
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165180,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message: "i am trapped in here ",
        created_at: "2024-10-05T23:52:42.000Z",
        updated_at: "2024-10-05T23:52:42.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "agent_message",
        agent_id: 9000002,
        agent_name: "Ahmad Falta",
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165181,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: true,
        message: "how can i help you ? ",
        created_at: "2024-10-05T23:53:05.000Z",
        updated_at: "2024-10-05T23:53:05.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "message",
        agent_id: null,
        agent_name: null,
        agent_avatar: "",
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165182,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message: "helpoo ",
        created_at: "2024-10-05T23:54:34.000Z",
        updated_at: "2024-10-05T23:54:34.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "agent_message",
        agent_id: 9000002,
        agent_name: "Ahmad Falta",
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
    {
        id: 165183,
        chatbot_id: "23ab3726-187f-4c11-83e9-0fb3ccabd6f4",
        session_id: "fe726b6f-e668-441a-bed6-94f770574953",
        from_user: false,
        message: "will u help me ? ",
        created_at: "2024-10-05T23:55:08.000Z",
        updated_at: "2024-10-05T23:55:08.000Z",
        debug_json: null,
        api_called: false,
        knowledgebase_called: false,
        extra_params: null,
        type: "agent_message",
        agent_id: 9000002,
        agent_name: "Ahmad Falta",
        agent_avatar: null,
        handoff_happened_during_office_hours: false,
    },
];


describe("history-to-messages", () => {
    it("should convert history to messages", () => {
        const output = historyToWidgetMessages(sampleData);
        expect(output).toMatchSnapshot();
    });
});