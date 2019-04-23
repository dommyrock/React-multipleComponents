import React from "react";
export default function ImgRender(props) {
  console.log(props.size);
  let idCounter = 100; //ids for new rendered btns
  return (
    <div>
      <div className="container">
        <img key={props.item.id} src={props.item.imgSrc} />
        {props.size == "thumb" ? (
          <button key={idCounter++} className="btn">
            HD
          </button>
        ) : null}
      </div>
    </div>
  );
}

//set unique id for new btn generated instead passing 'props.item.id' which is already used by imgs !!!!!

//TODO make new method that fetched single img (from onClick btn )
//fetch only changes state of current img-quality ... rest stay "thumb" Quality
