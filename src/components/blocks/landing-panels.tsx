import { ArrowRightIcon, SparklesIcon } from "lucide-react";

import { LandingDemos } from "@/components/blocks/landing-demos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PANEL_BASE_CLASSNAME =
  "relative w-full overflow-hidden border-y border-border/70";

const PANEL_INNER_CLASSNAME = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export const LandingPanels = () => (
  <div className="w-full">
    <section
      className={cn(
        PANEL_BASE_CLASSNAME,
        "bg-linear-to-b from-background via-muted/30 to-background",
        "py-20 sm:py-28"
      )}
      id="story"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="-top-40 -translate-x-1/2 absolute left-1/2 h-128 w-lg rounded-full bg-primary/12 blur-3xl" />
        <div className="-bottom-40 -translate-x-1/2 absolute left-1/3 h-112 w-md rounded-full bg-secondary/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-primary),transparent_55%)]/12" />
      </div>

      <div className={cn(PANEL_INNER_CLASSNAME, "relative")}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Full-width</Badge>
              <Badge variant="outline">Layered</Badge>
              <Badge variant="outline">Composable</Badge>
            </div>

            <h2 className="text-balance font-bold text-3xl leading-tight sm:text-4xl">
              Wide panels. Tall sections. Clean layers.
            </h2>
            <p className="max-w-2xl text-balance text-muted-foreground">
              Placeholder copy, real components, and a layout that feels like a
              product instead of a template.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                render={
                  <a href="#components">
                    Explore components <ArrowRightIcon />
                  </a>
                }
              />
              <Button
                render={<a href="#cta">Jump to the end</a>}
                variant="outline"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {[
                "Contrast that respects the theme",
                "Spacing that breathes",
                "Panels that stack and split",
              ].map((text) => (
                <div
                  className="rounded-2xl border bg-card/70 p-5 shadow-xs backdrop-blur"
                  key={text}
                >
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="size-4 text-primary" />
                    <span className="font-medium">{text}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Replace this with your actual value prop when ready.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className={cn(
        PANEL_BASE_CLASSNAME,
        "bg-[linear-gradient(180deg,var(--color-background),var(--color-background)_60%,var(--color-muted))]/18",
        "py-20 sm:py-28"
      )}
      id="layers"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-secondary),transparent_50%)]/12" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--color-primary),transparent_55%)]/10" />
      </div>

      <div className={cn(PANEL_INNER_CLASSNAME, "relative")}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Panels</Badge>
              <Badge variant="outline">Grid</Badge>
              <Badge variant="outline">Cards</Badge>
            </div>
            <h2 className="text-balance font-bold text-3xl leading-tight sm:text-4xl">
              Blocks that look intentional.
            </h2>
            <p className="max-w-3xl text-balance text-muted-foreground">
              These are just Cards with careful spacing. The background does the
              rest.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {["Narrative", "Motion", "Hierarchy", "Polish"].map(
              (title, index) => (
                <Card className="md:col-span-6" key={title}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-2">
                      <span>{title}</span>
                      <Badge
                        variant={index % 2 === 0 ? "default" : "secondary"}
                      >
                        {index + 1}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Placeholder text tuned for a landing page rhythm.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      Swap the copy, keep the composition. The card chrome and
                      the borders already match your design system.
                    </p>
                    <div className="h-2 w-full rounded-full bg-muted" />
                    <div className="h-2 w-4/5 rounded-full bg-muted" />
                    <div className="h-2 w-3/5 rounded-full bg-muted" />
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </section>

    <div id="try-it-now" />

    <section
      className={cn(
        PANEL_BASE_CLASSNAME,
        "bg-linear-to-b from-muted/20 via-background to-background",
        "py-20 sm:py-28"
      )}
      id="components"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        <div className="-top-24 absolute right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className={cn(PANEL_INNER_CLASSNAME, "relative")}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Alert dialog</Badge>
              <Badge variant="outline">Toast</Badge>
              <Badge variant="outline">Toggle group</Badge>
            </div>
            <h2 className="text-balance font-bold text-3xl leading-tight sm:text-4xl">
              Interactive demos (real components).
            </h2>
            <p className="max-w-3xl text-balance text-muted-foreground">
              Everything below is wired to your existing providers. Click a
              button and you will get a real toast.
            </p>
          </div>

          <LandingDemos />
        </div>
      </div>
    </section>

    <section
      className={cn(
        PANEL_BASE_CLASSNAME,
        "bg-linear-to-b from-background via-muted/20 to-background",
        "py-24 sm:py-32"
      )}
      id="cta"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary),transparent_65%)]/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      <div className={cn(PANEL_INNER_CLASSNAME, "relative")}>
        <div className="flex flex-col gap-8 rounded-3xl border bg-card/60 p-8 shadow-xs backdrop-blur sm:p-12">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">CTA</Badge>
              <Badge variant="outline">Placeholder</Badge>
            </div>
            <h2 className="text-balance font-bold text-3xl leading-tight sm:text-4xl">
              Ready for your real copy.
            </h2>
            <p className="max-w-2xl text-balance text-muted-foreground">
              Replace the headline, swap the hero image, and keep the layout.
              The sections are already doing the heavy lifting.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              render={
                <a href="#top">
                  Back to top <ArrowRightIcon />
                </a>
              }
            />
            <Button
              render={<a href="#components">Revisit demos</a>}
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);
