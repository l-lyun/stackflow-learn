import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./main";

type ReplaceParams = {
  title: string;
};

const ReplacePage: ActivityComponentType<ReplaceParams> = ({
  params: { title },
}) => {
  const { pop } = useFlow();
  const onClick = () => {
    pop();
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>Go Back</button>
    </div>
  );
};

export default ReplacePage;
