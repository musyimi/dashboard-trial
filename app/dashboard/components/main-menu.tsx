import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import { LightDark } from "@/components/light-dark";

export default function MainMenu() {
  return <div >
    <nav className="bg-muted overflow-auto p-4 h-screen flex flex-col">
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-3">
        <MenuTitle />
      </header>
      <div className="py-4 grow">
        <MenuItem href="/dashboard">
          My Dashboard
        </MenuItem>
        <MenuItem href="/dashboard/teams">
          Teams
        </MenuItem>
        <MenuItem href="/dashboard/account">
          Account
        </MenuItem>
        <MenuItem href="/dashboard/settings">
          Settings
        </MenuItem>
      </div>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-primary dark:bg-primary">
            MM
          </AvatarFallback>
        </Avatar>
        <Link className="hover:underline" href="/">Logout</Link>
        <LightDark className="ml-auto" />
      </footer>

    </nav>
  </div>
}