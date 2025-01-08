import { ActivityComponentType, useActivity } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./main";
import { useStepFlow } from "./main";

type PushParams = {
  title: string;
};

const PushToPushPage: ActivityComponentType<PushParams> = ({
  params: { title },
}) => {
  const { pop } = useFlow();
  const { stepPush, stepPop } = useStepFlow("PushToPushPage");
  const activity = useActivity();
  console.log(activity);
  const onClickPop = () => {
    pop();
  };
  const onClickStepPush = () => {
    stepPush({ title: "Push Step" });
  };
  const onclickStepPop = () => {
    stepPop({ title: "Pop Step" });
  };
  return (
    <AppScreen appBar={{ title: "PushToPushPage" }}>
      <div>
        <h1>{title}</h1>
        <button onClick={onClickPop}>Go Back</button>
        <button onClick={onClickStepPush}>Go Step</button>
        <button onClick={onclickStepPop}>back Step</button>
      </div>
    </AppScreen>
  );
};

export default PushToPushPage;
