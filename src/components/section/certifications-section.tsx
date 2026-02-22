/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Certifications
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Professional Certifications & Labs
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-center">
              Industry certifications and hands-on cybersecurity training.
            </p>
          </div>
        </div>

        <Timeline>
          {DATA.certifications.map((cert) => (
            <TimelineItem
              key={cert.title + cert.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex items-center justify-center text-xs font-bold">
                    🛡
                  </div>
                )}
              </TimelineConnectItem>

              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {cert.dates && (
                  <time className="text-xs text-muted-foreground">
                    {cert.dates}
                  </time>
                )}

                {cert.title && (
                  <h3 className="font-semibold leading-none">
                    {cert.title}
                  </h3>
                )}

                {cert.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {cert.description}
                  </p>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}