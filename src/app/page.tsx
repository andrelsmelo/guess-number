import Button from "@/components/Button";
import Game from "@/components/Game";
import Never from "@/components/Never";
import Ranking from "@/components/Ranking";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Link href="/login">
        <Button variant="success" className="fixed right-0 bottom-0"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4"><rect width="256" height="256" fill="none" /><line x1="24" y1="128" x2="136" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="96 88 136 128 96 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="136 40 200 40 200 216 136 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg> </Button>
      </Link>
      <Never />
      <Game />
      <Ranking />
    </main>
  );
}
