"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { ChangeEvent } from "react"
import { useToast } from "@/hooks/use-toast"


export function InputFile() {
    const { toast } = useToast()

    function handleReportSelection(event: ChangeEvent<HTMLInputElement>): void {
        if (!event.target.files) {
            toast({
                title: "No file selected",
                description: "Please select a file to upload",
            })
            return;
        };
        const file = event.target.files[0]
        let isValidImage = false;
        let isValidFile = false;
        const validImagesList = ['image/jpeg', 'image/png', 'image/jpg']
        const validDocsList = ['application/pdf']
        if (validImagesList.includes(file.type))
            isValidImage = true;
        if (validDocsList.includes(file.type))
            isValidFile = true;
        if (!isValidImage && !isValidFile) {
            toast({
                title: "Invalid file type",
                description: "Please upload a valid image or document",
                variant: "destructive"
            })
            return;
        }
        toast({
            title: "File uploaded",
            description: "Your file has been uploaded successfully",
            variant: "success"
        })
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <Input type="file" className="w-full" onChange={handleReportSelection} />
            <Button className="w-full">Upload File</Button>
        </div>
    )
}