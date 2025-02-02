"use-client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { ChangeEvent } from "react"

export function InputFile() {
    return (
        <div className="w-full flex flex-col gap-4">
            <Input type="file" className="w-full" />
            <Button className="w-full">Upload File</Button>
        </div>
    )
}