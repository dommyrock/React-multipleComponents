import React from "react";
export default function ImgRender(props) {
  return (
    <div>
      <div className="container">
        <img key={props.item.id} src={props.item.imgSrc} alt="" />
        {props.item.size === "thumb" ? ( //Conditionaly render button
          <button
            key={props.imgIndex}
            className="btn"
            onClick={() =>
              props.handleHdClick(
                props.item.id,
                props.imgIndex,
                props.item.size
              )
            } //pass a function itself to onClick(not a result of the passed function invocation)!!!!
          >
            HD
          </button>
        ) : null}
      </div>
    </div>
  );
}

//set unique id for new btn generated instead passing 'props.item.id' which is already used by imgs !!!!!
