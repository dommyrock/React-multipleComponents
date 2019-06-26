//custom method for fetching API(hosted on ISS atm for dev)
export function fetchMyApi(props) {
  console.log("Requested url: " + props.apiUrl);
  fetch(props.apiUrl)
    .then(response => response.json())
    .then(response => {
      return response.data;
    })
    .catch(ex => {
      console.log("Can’t access " + props.apiUrl + " response. Blocked by browser? " + ex);
    });
}

//was componentDidMount previously......this needs to be done (separate api call here into external function)
