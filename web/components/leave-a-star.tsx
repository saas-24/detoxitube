import { ArrowRight } from "lucide-react";

export default function LeaveAStar() {
  return (
    <div className="h-10 mb-2 flex w-full bg-neutral-900 justify-center items-center gap-2 text-sm">
      <a target="_blank" href="https://github.com/saas-24/detoxitube" className="cursor-pointer flex gap-2 group items-center">
        <span>✨ ⭐ Leave a star in Github</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform ease-in size-4" />
      </a>
    </div>
  );
}
