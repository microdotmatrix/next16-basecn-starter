"use client";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toastManager } from "@/components/ui/toast";
import {
  Toggle,
  ToggleGroup,
  ToggleGroupSeparator,
} from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import {
  ActivityIcon,
  BadgeCheckIcon,
  LayersIcon,
  LayoutGridIcon,
  SparklesIcon,
} from "lucide-react";
import * as React from "react";

type ToastKind = "success" | "info" | "warning" | "error";

const TOAST_KIND_LABEL: Record<ToastKind, string> = {
  error: "Error",
  info: "Info",
  success: "Success",
  warning: "Warning",
};

export const LandingDemos = () => {
  const [layoutMode, setLayoutMode] = React.useState<string[]>(["stack"]);
  const isStack = layoutMode[0] === "stack";

  const [toastKind, setToastKind] = React.useState<string[]>(["success"]);
  const resolvedToastKind = (toastKind[0] ?? "success") as ToastKind;

  const coerceStringArray = React.useCallback(
    (value: unknown[]) =>
      value.filter((item): item is string => typeof item === "string"),
    []
  );

  const gridClassName = cn(
    "grid gap-6",
    isStack ? "grid-cols-1" : "grid-cols-1 md:grid-cols-12"
  );

  const cardSpanClassName = cn(
    "md:col-span-12",
    isStack ? "md:col-span-12" : "md:col-span-6"
  );

  const showToast = React.useCallback(() => {
    toastManager.add({
      title: `${TOAST_KIND_LABEL[resolvedToastKind]} toast`,
      description: "Placeholder notification with a real component behind it.",
      type: resolvedToastKind,
      actionProps: {
        children: "Undo",
        onClick() {
          toastManager.add({
            title: "Undone",
            description: "That was purely for demonstration purposes.",
            type: "info",
          });
        },
      },
    });
  }, [resolvedToastKind]);

  const runPromiseToast = React.useCallback(() => {
    const shouldSucceed = Math.random() > 0.3;

    toastManager.promise(
      new Promise<string>((resolve, reject) => {
        window.setTimeout(() => {
          if (shouldSucceed) {
            resolve("All systems nominal");
            return;
          }
          reject(new Error("Simulated failure"));
        }, 1200);
      }),
      {
        loading: {
          title: "Loading…",
          description: "Pretending to contact a very serious API.",
          type: "loading",
        },
        success: {
          title: "Done",
          description: "Result: All systems nominal.",
          type: "success",
        },
        error: {
          title: "Nope",
          description: "Result: Simulated failure.",
          type: "error",
        },
      }
    );
  }, []);

  return (
    <div className={gridClassName}>
      <Card className={cardSpanClassName}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SparklesIcon className="size-4" />
            Component playground
          </CardTitle>
          <CardDescription>
            This section is intentionally interactive so you can see the UI
            primitives in motion.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Layout</Badge>
                <span className="text-muted-foreground text-sm">
                  Toggle between stacked and split panels.
                </span>
              </div>
              <ToggleGroup
                onValueChange={(value: unknown[]) =>
                  setLayoutMode(coerceStringArray(value))
                }
                size="sm"
                value={layoutMode}
                variant="outline"
              >
                <Toggle value="stack">
                  <LayersIcon />
                  Stack
                </Toggle>
                <ToggleGroupSeparator />
                <Toggle value="grid">
                  <LayoutGridIcon />
                  Grid
                </Toggle>
              </ToggleGroup>
            </div>

            <div className="rounded-2xl border bg-muted/30 p-4 sm:p-6">
              <Tabs defaultValue="toast">
                <TabsList className="w-full" variant="underline">
                  <TabsTrigger value="toast">Toasts</TabsTrigger>
                  <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
                  <TabsTrigger value="faq">Accordion</TabsTrigger>
                </TabsList>

                <TabsContent className="pt-4" value="toast">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <BadgeCheckIcon className="size-4" />
                        <span className="font-medium">Toast controls</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Pick a tone, then fire a toast. These are rendered by
                        the global provider in your layout.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <ToggleGroup
                        onValueChange={(value: unknown[]) =>
                          setToastKind(coerceStringArray(value))
                        }
                        size="sm"
                        value={toastKind}
                        variant="outline"
                      >
                        <Toggle value="success">Success</Toggle>
                        <ToggleGroupSeparator />
                        <Toggle value="info">Info</Toggle>
                        <ToggleGroupSeparator />
                        <Toggle value="warning">Warning</Toggle>
                        <ToggleGroupSeparator />
                        <Toggle value="error">Error</Toggle>
                      </ToggleGroup>

                      <div className="flex flex-wrap gap-3">
                        <Button onClick={showToast} size="sm">
                          Show toast
                        </Button>
                        <Button
                          onClick={runPromiseToast}
                          size="sm"
                          variant="outline"
                        >
                          Run promise toast
                        </Button>
                      </div>
                    </div>

                    <Progress className="max-w-md" max={100} value={72}>
                      <div className="flex items-center justify-between">
                        <ProgressLabel className="flex items-center gap-2">
                          <ActivityIcon className="size-4" />
                          Demo pipeline
                        </ProgressLabel>
                        <ProgressValue />
                      </div>
                    </Progress>
                  </div>
                </TabsContent>

                <TabsContent className="pt-4" value="dialogs">
                  <AlertDialog>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <span className="font-medium">Alert dialog</span>
                          <span className="text-muted-foreground text-sm">
                            A crisp confirmation layer with a blurred backdrop.
                          </span>
                        </div>
                        <Button
                          render={<AlertDialogTrigger />}
                          size="sm"
                          variant="destructive"
                        >
                          Open dialog
                        </Button>
                      </div>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Proceed with the placeholder action?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This is a demo dialog. Nothing will actually be
                            deleted.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <Button
                            render={<AlertDialogClose />}
                            variant="outline"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={() => {
                              toastManager.add({
                                title: "Confirmed",
                                description:
                                  "You clicked confirm. This was safe and reversible.",
                                type: "success",
                              });
                            }}
                            render={<AlertDialogClose />}
                            variant="destructive"
                          >
                            Confirm
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </div>
                  </AlertDialog>
                </TabsContent>

                <TabsContent className="pt-4" value="faq">
                  <Accordion className="w-full" defaultValue={["panel-1"]}>
                    <AccordionItem value="panel-1">
                      <AccordionTrigger>
                        What is this section for?
                      </AccordionTrigger>
                      <AccordionPanel>
                        A calm place to show more detail without breaking the
                        flow.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem value="panel-2">
                      <AccordionTrigger>Is the copy real?</AccordionTrigger>
                      <AccordionPanel>
                        No. It is intentionally placeholder text with real
                        components.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem value="panel-3">
                      <AccordionTrigger>
                        Can this be replaced later?
                      </AccordionTrigger>
                      <AccordionPanel>
                        Yes. Swap in your real marketing copy and keep the
                        composition.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-muted-foreground text-sm">
          Tip: toasts are driven by Base UI&apos;s toast manager and the
          provider in your layout.
        </CardFooter>
      </Card>

      <Card className={cardSpanClassName}>
        <CardHeader>
          <CardTitle>Static components</CardTitle>
          <CardDescription>
            A simple grid using your `Card`, `Badge`, and `Button` primitives.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Crisp typography",
              tag: "Type",
              body: "Short, punchy placeholder copy that reads well in both themes.",
            },
            {
              title: "Layered panels",
              tag: "Layout",
              body: "Wide sections with subtle borders and gradient overlays.",
            },
            {
              title: "Composable UI",
              tag: "API",
              body: "Blocks are composed from primitives so you can re-arrange freely.",
            },
            {
              title: "Interaction ready",
              tag: "UX",
              body: "Dialog + toast patterns are already wired through the app context.",
            },
          ].map((item) => (
            <div
              className="flex flex-col gap-3 rounded-xl border bg-background/70 p-4"
              key={item.title}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium">{item.title}</span>
                <Badge className="shrink-0" variant="outline">
                  {item.tag}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">{item.body}</p>
              <Button
                className="w-fit"
                onClick={() => {
                  toastManager.add({
                    title: item.title,
                    description: "Clicked a placeholder card action.",
                    type: "info",
                  });
                }}
                size="sm"
                variant="outline"
              >
                Preview
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
