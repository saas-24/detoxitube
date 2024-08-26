import SideNav from "@/components/ui/dashboard/sidenav";
import { MailIcon, Chrome } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-card px-2">
        <SideNav />
      </div>
      <div className="flex-grow flex flex-col md:overflow-y-auto md:px-12 md:pt-12">
        <div className="flex-grow p-6">{children}</div>
        <div className="w-full p-4">
          <div className="flex items-center justify-center gap-8">
            <Link
              href="https://supermemory.ai/extension"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-grey-50 duration-300"
            >
              <Chrome className="w-4 h-4" />
              Install extension
            </Link>
            <Link
              href="mailto:parikhpriyanshu7@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-grey-50 duration-300"
            >
              <MailIcon className="w-4 h-4" />
              Bug report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
