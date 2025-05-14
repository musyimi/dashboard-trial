import { LightDark } from "@/components/light-dark"

type Props = {
  children?: React.ReactNode
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDark className="fixed top-1/2 right-2 -mt-4" />
    </>

  )
}