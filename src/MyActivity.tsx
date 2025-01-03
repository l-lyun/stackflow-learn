import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./main";

const MyActivity: ActivityComponentType = () => {
  const { push, replace } = useFlow();
  const onClickPush = () => {
    push("PushPage", {
      title: "Hello",
    });
  };
  const onClickReplace = () => {
    replace("ReplacePage", { title: "Replace Page" });
  };
  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>
        My Activity
        <button onClick={onClickPush}>Go to PushPage</button>
        <button onClick={onClickReplace}>Go to ReplacePage</button>
      </div>
    </AppScreen>
  );
};

export default MyActivity;
