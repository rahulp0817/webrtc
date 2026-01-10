"use client";

import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const OnCreate = () => {
    const roomId = crypto.randomUUID().slice(0, 8);
    router.push(`/meeting/${roomId}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-900">
      <HomeTemplate onCreate={OnCreate} onJoin={() => {}} />
    </div>
  );
}
