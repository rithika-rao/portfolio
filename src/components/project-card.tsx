/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full w-full border border-border rounded-xl p-6 hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="flex flex-col gap-1 mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <time className="text-xs text-muted-foreground">{dates}</time>
      </div>

      <div className="text-sm flex-1 text-muted-foreground leading-relaxed">
        <Markdown>{description}</Markdown>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-[11px] font-medium border border-border h-6 w-fit px-2"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}