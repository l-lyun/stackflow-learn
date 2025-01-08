import { ActivityComponentType, useActivity } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./main";

type PushParams = {
  title: string;
};

const PushPage: ActivityComponentType<PushParams> = ({ params: { title } }) => {
  const { pop, push } = useFlow();
  const activity = useActivity();

  console.log(activity);
  const onClickBack = () => {
    pop();
  };
  const onClickPushToPush = () => {
    push("PushToPushPage", { title: "PushToPushPage" });
  };
  return (
    <AppScreen appBar={{ title: "PushPage" }}>
      <div>
        <h1>{title}</h1>
        <button onClick={onClickBack}>Go Back</button>
        <button onClick={onClickPushToPush}>Go to Push</button>
      </div>
    </AppScreen>
  );
};

export default PushPage;
