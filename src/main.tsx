import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import "@stackflow/plugin-basic-ui/index.css";
import MyActivity from "./MyActivity";
import PushPage from "./PushPage";
import ReplacePage from "./ReplacePage";

const myPlugin = () => {
  return {
    key: "unique",
    onPushed({ effect }) {
      console.log(efffect.activity.name);
    },
  };
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { MyActivity, PushPage, ReplacePage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    myPlugin,
  ],
  initialActivity: () => "MyActivity",
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Stack />
  </StrictMode>
);
