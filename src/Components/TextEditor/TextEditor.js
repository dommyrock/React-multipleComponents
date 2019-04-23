import React, { Component, Fragment } from "react";
//npm i slate slate-react immutable
import { Editor } from "slate-react";
import { Value } from "slate";
import { BoldMark, ItalicMark, FormatToolbar } from "./index";
//npm add react-icons-kit (by wmira/react-icons-kit github)
import Icon from "react-icons-kit";
import { bold } from "react-icons-kit/feather/bold";
import { italic } from "react-icons-kit/feather/italic";
import { code } from "react-icons-kit/feather/code";
import { list } from "react-icons-kit/feather/list";
import { underline } from "react-icons-kit/feather/underline";
import { textHeight } from "react-icons-kit/fa/textHeight";
//Create initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "Type some text here:)"
              }
            ]
          }
        ]
      }
    ]
  }
});
export default class TextEditor extends Component {
  state = {
    value: initialValue
  };
  //on change update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value });
  };

  //we want all our commands to trigger by pressing 'ctrl' key (else return to caller method)
  onKeyDown = (e, change) => {
    //works if key = 'alt' +...
    if (!e.altKey) {
      return;
    }
    e.preventDefault();

    //What to do when key code
    switch (e.key) {
      case "b": {
        change.toggleMark("bold");
        return true;
      }
      case "i": {
        change.toggleMark("italic");
        return true;
      }
      case "c": {
        change.toggleMark("code");
        return true;
      }
      case "l": {
        change.toggleMark("list");
        return true;
      }
      case "u": {
        change.toggleMark("underline");
        return true;
      }
      case "h": {
        change.toggleMark("textHeight");
        return true;
      }
      default:
        break;
    }
  };

  renderMark = props => {
    switch (props.mark.type) {
      case "bold":
        return <BoldMark {...props} />;
      case "italic":
        return <ItalicMark {...props} />;
      case "code":
        return <code {...props.attributes}>{props.children}</code>;
      case "list":
        return (
          <ul {...props.attributes}>
            <li>{props.children}</li>
          </ul>
        );
      case "underline":
        return <u {...props.attributes}>{props.children}</u>;

      case "textHeight":
        return <h2 {...props.attributes}>{props.children}</h2>;
    }
  };

  onClickMark = (e, type) => {
    //prevent default browser behaviour like page refreash,etc...
    e.preventDefault();
    //grabbing this.state.value passed ffom ref -->editor in <Editor/>
    this.editor.toggleMark(type);
  };
  render() {
    return (
      <Fragment>
        <h3>--text editor--</h3>
        <p style={{ color: "lightgrey" }}>
          (defaults disabled(shortcuts 'alt +' h,b,i,c,l,u)
        </p>
        <FormatToolbar>
          <button
            className="tooltip-icon-button"
            onPointerDown={e => this.onClickMark(e, "textHeight")}
          >
            <Icon icon={textHeight} />
          </button>
          <button
            className="tooltip-icon-button"
            onPointerDown={e => this.onClickMark(e, "bold")}
          >
            <Icon icon={bold} />
          </button>
          <button
            className="tooltip-icon-button"
            onPointerDown={e => this.onClickMark(e, "italic")}
          >
            <Icon icon={italic} />
          </button>
          <button
            className="tooltip-icon-button"
            onPointerDown={e => this.onClickMark(e, "code")}
          >
            <Icon icon={code} />
          </button>
          <button
            className="tooltip-icon-button"
            onPointerDown={e => this.onClickMark(e, "list")}
          >
            <Icon icon={list} />
          </button>
          <button
            className="tooltip-icon-button"
            onPointerDown={e => this.onClickMark(e, "underline")}
          >
            <Icon icon={underline} />
          </button>
        </FormatToolbar>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderMark={this.renderMark}
          ref={editor => (this.editor = editor)}
        />
      </Fragment>
    );
  }
}

//Editor comp. imported form slate
