import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const BLUR_FADE_DELAY = 0.04;

const posts = [
  {
    title: "Session Hijacking: How Attackers Steal Active User Sessions",
    url: "https://medium.com/@ririkai/session-hijacking-how-attackers-steal-active-user-sessions-5eb2954444c1",
    date: "2026-01-01", // change if needed
  },
  {
    title: "Understanding TCP Flags",
    url: "https://medium.com/@ririkai/understanding-tcp-flags-9b32a33c2e6a",
    date: "2026-01-01", // change if needed
  },
];

export default function BlogPage() {
  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Blog
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          My published articles.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-5">
          {posts.map((post, index) => (
            <div key={index} className="flex items-start gap-x-3">
              <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                {String(index + 1).padStart(2, "0")}.
              </span>

              <div className="flex flex-col gap-y-1">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  {post.title}
                </a>

                <p className="text-xs text-muted-foreground">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}