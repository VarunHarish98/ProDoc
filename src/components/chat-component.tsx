import { Badge } from "@/components/ui/badge"

type Props = {
    reportData?: string
}

const ChatComponent = ({ reportData }: Props) => {
    return (
        <div className="bg-muted/50 relative flex flex-col rounded-xl p-4 gap-4 lg:col-span-2 h-full">
            <div className="flex justify-end">
                <Badge variant={'outline'} className={`${reportData && 'bg-[#00B612] text-white'}`}>{reportData ? "✅ Updated" : "❌ Not Updated"}</Badge>
            </div>
        </div>
    )
}

export default ChatComponent;