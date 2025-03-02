"use client"

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
import { MdOutlineSettings } from "react-icons/md";
import ReportComponent from "./report-component";

type Props = {
    onReportConfirmation: (data: string) => void
}


const DrawerComponent = ({ onReportConfirmation }: Props) => {
    return (
        <Drawer>
            <DrawerTrigger className="md:hidden">
                <MdOutlineSettings />
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
                <ReportComponent onReportConfirmation={onReportConfirmation} />
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent;


