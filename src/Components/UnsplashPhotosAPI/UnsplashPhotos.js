import React from "react";
import UnsplashFormComponent from "./UnsplashFormComponent";
import ImgRender from "./ImgRender";
//api call https://unsplash.com/documentation#search-photos
//Get a single page of photo results for a query.
//https://api.unsplash.com/search/photos/?query=city&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204

//Get a single page of collection results for a query.
//https://api.unsplash.com/search/collections/?query=city&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204

class UnsplashPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosCollection: [],
      size: "",
      searchKeyword: "",
      imgCount: 10,
      apiKey:
        "f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204",
      apiUrl: "https://api.unsplash.com/search/photos"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
  }
  //#region API props
  // componentDidMount() {
  //   fetch(
  //     "https://api.unsplash.com/search/photos/?query=city&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204"
  //   )
  //     .then(response => response.json())
  //     .then(response => {
  //       const {
  //         id,
  //         links,
  //         urls,
  //         user,
  //         description,
  //         height,
  //         tags
  //       } = response.results;
  //       // const { full, raw, regular, small, thumb } = urls; different photo sizes
  //       this.setState({
  //         loaded: true,
  //         photosCollection: response.results.map(item => ({
  //           imgSrc: item.urls.thumb,
  //           id: item.id
  //         })) //only fetch 1st item form [] resp (has 163 photos in it)
  //       });
  //     });
  // }
  //#endregion

  //Fetch api from [event.target.id] based on passed key from button
  handleClick(event) {
    const apiUrls = [
      "https://api.unsplash.com/search/photos/?per_page=10&query=city&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204",
      "https://api.unsplash.com/search/photos/?per_page=10&query=tree&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204",
      "https://api.unsplash.com/search/photos/?per_page=10&query=coast&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204",
      "https://api.unsplash.com/search/photos/?per_page=10&query=village&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204",
      "https://api.unsplash.com/search/photos/?per_page=10&query=cars&client_id=f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204"
    ];
    fetch(apiUrls[event.target.id])
      .then(response => response.json())
      .then(response => {
        this.setState({
          loaded: true,
          photosCollection: response.results.map(item => ({
            imgSrc: item.urls[this.state.size],
            id: item.id
          }))
        });
      });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  //fetch from api on pointerLeave search box
  handlePointerLeave() {
    const apiKey = this.state.apiKey;
    const apiUrl = this.state.apiUrl;
    let searchKey = this.state.searchKeyword;
    let photoCount = this.state.imgCount;
    console.log(searchKey + " count " + photoCount);

    fetch(
      //or w backticks `${apiUrl}/?per_page=${photoCount}&query=${searchKey}&client_id=${apiKey}`
      apiUrl +
        "/?per_page=" +
        photoCount +
        "&query=" +
        searchKey +
        "&client_id=" +
        apiKey
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          loaded: true,
          photosCollection: response.results.map(item => ({
            imgSrc: item.urls[this.state.size],
            id: item.id
          }))
        });
      });
  }

  render() {
    const imgRenders = this.state.photosCollection.map(item => (
      <ImgRender key={item.id} item={item} size={this.state.size} />
    ));
    console.log(imgRenders);

    return (
      <div className="App">
        <UnsplashFormComponent
          key="unsplashForm"
          data={this.state}
          handleChange={this.handleChange}
          handlePointerLeave={this.handlePointerLeave}
          handleClick={this.handleClick}
        />
        {imgRenders}
      </div>
    );
  }
}

export default UnsplashPhotos;
// TODOD idea :
//1  Download Thumbs by default (if hovered over btn pops up " Get HD photo" and fetches "raw" photo)
