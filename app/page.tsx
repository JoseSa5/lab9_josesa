import MagiaDoJSX from "@/components/MagiaDoJSX/MagiaDoJSX";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <h2>Interfaces Modernas</h2>
      <p>Bem-vindo à minha app em React e Next.js</p>
      <MagiaDoJSX />
      <Link href="/counter">Counter</Link>
    </div>
  );
}
