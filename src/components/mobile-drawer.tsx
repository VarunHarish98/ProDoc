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


const DrawerComponent = () => {
    return (
        <Drawer>
            <DrawerTrigger>
                <MdOutlineSettings />
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
                <ReportComponent />
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent;


