"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { ChangeEvent, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import userSessionData from "./user-id"
import { Loader2 } from "lucide-react"


export function InputFile() {
    const { toast } = useToast()
    const [isValid, setIsValid] = useState<boolean>(true)
    const [fileData, setFileData] = useState<string | null>("")
    const placeholder = `Data from the report will appear here. For better recommendations please provide patient history and symptoms (if any)`
    const [responseData, setResponseData] = useState<string>(placeholder);
    const [buttonState, setButtonState] = useState<string>("Upload File")

    function handleReportSelection(event: ChangeEvent<HTMLInputElement>): void {
        if (!event.target.files) {
            toast({
                title: "No file selected",
                description: "Please select a file to upload",
            })
            setIsValid(false)
            return;
        };
        const file = event.target.files[0]
        let isValidImage = false;
        let isValidFile = false;
        const validImagesList = ['image/jpeg', 'image/png', 'image/jpg']
        const validDocsList = ['application/pdf']
        if (validImagesList.includes(file.type)) {
            isValidImage = true;
            setIsValid(true)
        } if (validDocsList.includes(file.type)) {
            isValidFile = true;
            setIsValid(true)
        } if (!isValidImage && !isValidFile) {
            toast({
                title: "Invalid file type",
                description: "Please upload a valid image or document",
                variant: "destructive"
            })
            setIsValid(false)
            return;
        }
        toast({
            title: "File uploaded",
            description: "Your file has been uploaded successfully",
            variant: "success"
        })
        setIsValid(true)
        if (isValidFile && isValid) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                const fileContent = reader.result as string;
                setFileData(fileContent)
            }
            reader.onerror = (e) => {
                toast({
                    title: "Error",
                    description: "An error occurred while reading the file",
                    variant: "destructive"
                })
            }
            reader.readAsDataURL(file)
        }
        if (isValidImage && isValid) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                const imageContent = reader.result as string;
                console.log(imageContent)
                setFileData(imageContent)
            }
            reader.onerror = (e) => {
                toast({
                    title: "Error",
                    description: "An error occurred while reading the file",
                    variant: "destructive"
                })
            }
            reader.readAsDataURL(file)
        }
    }

    async function extractDetails() {
        try {
            setIsValid(false)
            setButtonState("Extracting Details")
            // Extract details from the file
            if (!fileData) {
                toast({
                    title: "No file selected",
                    description: "Please select a file to upload",
                    variant: "destructive"
                })
                return;
            }
            const userId = await userSessionData()
            const resp = await fetch("/api/extractGeminiReport", {
                method: "POST",
                body: JSON.stringify({ query: fileData, userId }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (resp.ok) {
                const responseText = await resp.json();
                console.log(responseText.response);
                setResponseData(responseText.response.replaceAll("*", ""));
            }
            setIsValid(true)
            setButtonState("Upload File")
        } catch (error) {
            console.error("Error in extractDetails:", error)
            toast({
                title: "Error",
                description: "An error occurred while extracting details from the file",
                variant: "destructive"
            })
            setIsValid(true)
            setButtonState("Upload File")
        }

    }

    return (
        <div className="w-full flex flex-col gap-4">
            <Input type="file" className="w-full" onChange={handleReportSelection} />
            <Button onClick={extractDetails} disabled={!isValid} className={`w-full`}>{!isValid && <Loader2 className="animate-spin" />}{buttonState}</Button>
            <label className="text-sm font-medium">Report Summary</label>
            <textarea className="w-full h-[40vh] p-2 border-none rounded-lg" value={(responseData)} onChange={(e) => setResponseData(e.target?.value)}></textarea>
        </div>
    )
}