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
      photosCollection: [], //todo save to children props
      imgCount: 10,
      size: "", //size set for whole rendered collection ( change to separate prop foreach rendered img  !!)
      searchKeyword: "",
      apiKey: "f2e129c71bd24f27de8cca4d8d5e0c701680ebdcbef2c594a79ba2774cb4f204",
      apiUrl: "https://api.unsplash.com/search/photos",
      totalPages: "",
      total: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
  }
  //#region API props(old Code)
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

  //premade fetching // HAS NO DYNAMIC Concatenation !
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
          totalPages: response.total_pages,
          total: response.total,
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
    // console.log(searchKey + " count " + photoCount);

    fetch(
      //or w backticks `${apiUrl}/?per_page=${photoCount}&query=${searchKey}&client_id=${apiKey}`
      apiUrl + "/?per_page=" + photoCount + "&query=" + searchKey + "&client_id=" + apiKey
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          loaded: true,
          photosCollection: response.results.map(item => ({
            imgSrc: item.urls[this.state.size],
            id: item.id,
            size: this.state.size //set initial size to ALL rndered items
          }))
        });
      });
  }

  //called in <ImgRender> on "HD" click(separate api call foreach item (to save bandwidth))
  //make same api (filter our single one by img id)--->assign it to state copy-> ...prevstate
  handleHdClick = (id, imgIndex, size) => {
    size = "regular";
    console.log(`HD was clicked ....TODO API call with this Img ID :${id}--INDEX Of:${imgIndex}---size:${size}`);

    fetch(
      `${this.state.apiUrl}/?per_page=${this.state.imgCount}&query=${this.state.searchKeyword}&client_id=${
        this.state.apiKey
      }`
    )
      .then(response => response.json())
      .then(response => {
        const collectionCopy = [...this.state.photosCollection]; //copy (make change to item and replace old[])
        collectionCopy[imgIndex].imgSrc = response.results[imgIndex].urls[size]; //change CLICKED img size
        collectionCopy[imgIndex].size = size; //change size prop for clicked item(so we dont show btn on already clicked img)
        this.setState({
          photosCollection: collectionCopy
        });
      });
    console.log(this.state.photosCollection);
  };

  render() {
    const imgRenders = this.state.photosCollection.map((item, index) => (
      <ImgRender
        key={item.id}
        item={item}
        size={this.state.size}
        handleHdClick={this.handleHdClick}
        imgIndex={index} //index passed so we know which img-HD btn is clicked!!!!
      />
    ));

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

//#region Example of modifying child value in state of []
/*
this.state = {
      input:'',
     recipeList :
      [{
        recipe: "Tacos",
        directions: "make tacos",
        ingredients: ["meat"]
      },
      {
        recipe: "pizza",
        directions: "bake",
        ingredients: ["dough"]
      }]
      ......
      
) For the handleSubmit method, you are trying to update the state of a nested array.
 You can not write: recipeList[0].recipe: newRecipe, but you first create a copy of
 the full recipeList array in this.state and the modify the recipe value of the first
element of the new copied array and then assign this modified array back to
 this.state.recipeList. 
Also, you need to make sure you set the input property back to a blank string,
 so after clicking Submit, the textbox is empty.

  handleSubmit() {
    const recipeList = [...this.state.recipeList];
    recipeList[0].recipe = this.state.input;
    this.setState({
      recipeList,
      input: ""
    });
  }
  */
//#endregion
