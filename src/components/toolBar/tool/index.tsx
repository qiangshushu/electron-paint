import React from "react";
import CreateTwoTone from "@material-ui/icons/CreateTwoTone";
import FormatColorFillTwoTone from "@material-ui/icons/FormatColorFillTwoTone";
import ColorizeTwoToneIcon from "@material-ui/icons/ColorizeTwoTone";
// import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
// import TextFieldsIcon from "@material-ui/icons/TextFields";
import { ToolType } from "../../../util/toolType";
import { ToolTypeContext } from "../../../context";
import "./index.less";

const selectedToolClass = "selected-tool";
export interface ToolPanelProps {
  className?: string;
}

const ToolPanel: React.FC<ToolPanelProps> = (props) => {
  const { className } = props;
  return (
    <div className={className ? `toolpanel ${className}` : "toolpanel"}>
      <ToolTypeContext.Consumer>
        {({ type, setType }) => (
          <>
            <div className="top">
              <span title="铅笔">
                <CreateTwoTone
                  className={
                    type === ToolType.PEN
                      ? `tool-item ${selectedToolClass}`
                      : "tool-item"
                  }
                  onClick={() => {
                    setType(ToolType.PEN);
                  }}
                />
              </span>
              <span title="橡皮擦">
                <img
                  src="./icon/eraser.svg"
                  className={
                    type === ToolType.ERASER
                      ? `tool-item ${selectedToolClass}`
                      : "tool-item"
                  }
                  onClick={() => {
                    setType(ToolType.ERASER);
                  }}
                />
              </span>
              <span title="填充">
                <FormatColorFillTwoTone
                  className={
                    type === ToolType.COLOR_FILL
                      ? `tool-item ${selectedToolClass}`
                      : "tool-item"
                  }
                  onClick={() => {
                    setType(ToolType.COLOR_FILL);
                  }}
                />
              </span>
            </div>
            <div className="down">
              <span title="颜色选取器">
                <ColorizeTwoToneIcon
                  className={
                    type === ToolType.COLOR_EXTRACT
                      ? `tool-item ${selectedToolClass}`
                      : "tool-item"
                  }
                  onClick={() => {
                    setType(ToolType.COLOR_EXTRACT);
                  }}
                />
              </span>
              <span title="文字">
                <FormatColorFillTwoTone
                  className={
                    type === ToolType.TEXT
                      ? `tool-item ${selectedToolClass}`
                      : "tool-item"
                  }
                  onClick={() => {
                    setType(ToolType.TEXT);
                  }}
                />
              </span>
              <span title="放大镜">
                <FormatColorFillTwoTone
                  className={
                    type === ToolType.MAGNIFYING
                      ? `tool-item ${selectedToolClass}`
                      : "tool-item"
                  }
                  onClick={() => {
                    setType(ToolType.MAGNIFYING);
                  }}
                />
              </span>
            </div>
          </>
        )}
      </ToolTypeContext.Consumer>
      <div className="title">工具</div>
    </div>
  );
};

export default ToolPanel;
