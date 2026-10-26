import type {ComponentProps} from "react";
import {compileMDX} from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {type Options} from "rehype-pretty-code";

const prettyCode: Options = {
  theme: {light: "github-light", dark: "github-dark-default"},
  keepBackground: false
};

function Callout({
  type = "note",
  children
}: {
  type?: "note" | "warning";
  children: React.ReactNode;
}) {
  return (
    <aside
      className={`not-prose my-6 rounded-xl border px-5 py-4 text-[0.95rem] leading-relaxed ${
        type === "warning"
          ? "border-amber-500/40 bg-amber-500/10"
          : "border-line bg-surface"
      }`}
    >
      <p className="mb-1 font-mono text-xs uppercase tracking-widest text-accent-text">
        {type}
      </p>
      {children}
    </aside>
  );
}

function A({href = "", ...props}: ComponentProps<"a">) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
      {...props}
    />
  );
}

export async function renderMdx(source: string) {
  const {content} = await compileMDX({
    source,
    components: {a: A, Callout},
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, {behavior: "wrap"}],
          [rehypePrettyCode, prettyCode]
        ]
      }
    }
  });
  return content;
}
