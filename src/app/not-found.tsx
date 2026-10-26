import Link from "next/link";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="mx-auto grid min-h-[80vh] max-w-3xl place-content-center px-6 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-text">
          404
        </p>
        <h1 className="mt-4 text-6xl font-semibold tracking-tight">
          Lost in the <em className="font-serif font-normal italic">void</em>.
        </h1>
        <p className="mt-4 text-muted">
          That page doesn&rsquo;t exist (anymore).
        </p>
        <Link
          href="/"
          className="mx-auto mt-8 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink"
        >
          Back home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
