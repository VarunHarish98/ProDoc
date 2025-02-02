
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { InputFile } from "./file-input"
import { FaGithub } from "react-icons/fa";

type Props = {}

const ReportComponent = (props: Props) => {
    return (
        <div className="grid w-full gap-6 overflow-auto items-start p-4 pt-0">
            <fieldset className="border relative grid  gap-6 rounded-lg p-4">
                <legend className="text-sm font-medium ">Report</legend>
                <InputFile />
                <label className="text-sm font-medium">Report Summary</label>
                <textarea className="w-full h-[65vh] p-2 border-none rounded-lg" placeholder="Data from the report will appear here. For better recommendations please provide patient history and symptoms (if any)"></textarea>
                <Button className="w-full" variant="destructive">Generate Report</Button>
                <div className="flex justify-center text-xs">
                    Share your thoughts on
                    <div className="flex p-1 gap-1">
                        <FaGithub />
                        <FaGithub />

                        {/* <a href="https://www.github.com/Varunharish98" target="_blank"/> */}
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default ReportComponent;