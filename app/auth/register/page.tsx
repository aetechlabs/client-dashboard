import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image";
import { SignUpForm } from "@/components/signup-form"
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function LoginPage() {
  return (
    <AuroraBackground className="bg-transparent flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col justify-center items-center gap-6">
        
          <div className="flex items-center flex-col justify-center rounded-md">
            <Image
                      className="block"
                      src="/image 1.svg"
                      alt="AETech Reaserch Labs Logo"
                      width={60}
                      height={10}
                      priority
                    />
            <p className="w-full text-white font-bold">AETech Client Dashboard</p>
          </div>
          
      
        <SignUpForm />
      </div>
    </AuroraBackground >
  )
}
