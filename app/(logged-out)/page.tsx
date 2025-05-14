import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <Trash2Icon size={50} className="text-green-500" />TupaTaka</h1>
      <p>Usafi Msafi</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>

    </>
  )
}