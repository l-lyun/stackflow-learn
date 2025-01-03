import { ActivityComponentType, useActivity } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./main";

type PushParams = {
  title: string;
};

const PushPage: ActivityComponentType<PushParams> = ({ params: { title } }) => {
  const { pop } = useFlow();
  const activity = useActivity();

  console.log(activity);
  const onClick = () => {
    pop();
  };
  return (
    <AppScreen appBar={{ title: "PushPage" }}>
      <div>
        <h1>{title}</h1>
        <button onClick={onClick}>Go Back</button>
      </div>
    </AppScreen>
  );
};

export default PushPage;
