import { defineConfig } from "@stackflow/config";

export const config = defineConfig({
  activities: [
    {
      name: "MyActivity",
      path: "/",
    },
    {
      name: "PushPage",
      path: "/push",
    },
    {
      name: "ReplacePage",
      path: "/replace",
    },
    {
      name: "PushToPushPage",
      path: "/pushtopush",
    },
  ],
  transitionDuration: 350,
});
