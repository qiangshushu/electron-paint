import React, { useState } from "react";
import "./index.less";
import ToolPanel from "./tool";
import ShapePanel from "./shape";
import Divider from "@material-ui/core/Divider";
import ThickSelector from "./thickSelector";
import ColorPanel from "./colorPanel";
import OtherOperator from "./other";
import { Button } from "@material-ui/core";

const Toolbar = (): JSX.Element => {
  const [ignoreMouseEvents, setIgnoreMouseEvents] = useState(false);

  return (
    <div className="toolbar">
      <ToolPanel className="toolbar-item" />
      <Divider className="divider" orientation="vertical" flexItem />
      <ShapePanel className="toolbar-item" />
      <Divider className="divider" orientation="vertical" flexItem />
      <ThickSelector className="toolbar-item" />
      <Divider className="divider" orientation="vertical" flexItem />
      <ColorPanel className="toolbar-item" />
      <Divider className="divider" orientation="vertical" flexItem />
      <OtherOperator />
      <Divider className="divider" orientation="vertical" flexItem />
      <Button
        onClick={(e) => {
          setIgnoreMouseEvents(!ignoreMouseEvents);
          console.log(!ignoreMouseEvents);
          window.electron?.setModel(!ignoreMouseEvents);
        }}
      >
        {ignoreMouseEvents ? "默认模式" : "画板模式"}
      </Button>
    </div>
  );
};

export default Toolbar;
