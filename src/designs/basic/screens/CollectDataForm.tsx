import { useAsyncFn } from "react-use";
import { useContact } from "@lib/index";
import { Input } from "@ui/input";
import { Loader } from "lucide-react";
import { z } from "zod";


const schema = z.object({
    name: z.string(),
    email: z.string().email(),
});

export function CollectDataForm() {
    const { contact, createContactAsync, shouldCollectData } = useContact();

    const [_state, handleSubmit] = useAsyncFn(async (data: z.infer<typeof schema>) => {
        return createContactAsync(data)
    }, [createContactAsync, contact]);

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const data = Object.fromEntries(formData.entries());
            const result = schema.safeParse(data);
            if (result.success) {
                await handleSubmit(result.data);
            }
        }} className="grid gap-2 grid-cols-1">
            <div className="flex flex-col gap-1">
                <label className="required font-medium text-xs text-secondary-foreground" htmlFor="collect-data:form:name">Name</label>
                <Input
                    disabled={!shouldCollectData.should}
                    required
                    defaultValue={contact?.name ?? ""}
                    id="collect-data:form:name"
                    name="name" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="required font-medium text-xs text-secondary-foreground" htmlFor="collect-data:form:email">Email</label>
                <Input
                    disabled={!shouldCollectData.should}
                    defaultValue={contact?.email ?? ""}
                    required
                    id="collect-data:form:email"
                    name="email" />
            </div>
            <button
                data-loading={_state.loading}
                data-error={!!_state.error}
                disabled={_state.loading || !shouldCollectData.should}
                type="submit"
                className="text-sm group text-center bg-primary text-background disabled:opacity-50 relative hover:brightness-110 active:brightness-110 transition-all font-medium rounded-lg px-3 py-1.5 flex items-center justify-center"
            >
                <span className="group-data-[loading='true']:opacity-0">Send</span>
                {_state.loading && <div className="absolute inset-0 flex items-center justify-center">
                    <Loader className="size-5 animate-spin" />
                </div>}
            </button>
        </form>
    )
}
