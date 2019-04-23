import React from "react";

export default function UnsplashFormComponent(props) {
  return (
    <main>
      <h3>Load up pictures for:</h3>
      <h4>
        Render size-
        <select
          value={props.data.size}
          onChange={props.handleChange}
          name="size"
        >
          <option value="" />
          <option value="thumb">thumb</option>
          <option value="small">small</option>
          <option value="regular">regular</option>
          <option value="raw">raw</option>
          <option value="full">full</option>
        </select>
      </h4>
      <h4>
        Number of photos-
        <select
          value={props.data.imgCount}
          onChange={props.handleChange}
          name="imgCount"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </h4>
      <input
        onChange={props.handleChange}
        onPointerLeave={props.handlePointerLeave}
        name="searchKeyword"
        type="text"
        placeholder="Search photos.."
        value={props.data.searchKeyword}
      />
      Or press:
      <button id="0" className="buttonBlue button5" onClick={props.handleClick}>
        City pictures
      </button>
      <button id="1" className="buttonBlue button5" onClick={props.handleClick}>
        Tree pictures
      </button>
      <button id="2" className="buttonBlue button5" onClick={props.handleClick}>
        Coast pictures
      </button>
      <button id="3" className="buttonBlue button5" onClick={props.handleClick}>
        Village pictures
      </button>
      <button id="4" className="buttonBlue button5" onClick={props.handleClick}>
        Car pictures
      </button>
      <hr />
    </main>
  );
}
//index (so we add unique key to new btns)
// 5 Premade buttons always render 10 item's , when searching we can select up to 30 items

// IF size == "thump" render btn on image (on press loads HD ("raw") Image )
