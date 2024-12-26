import axios from "axios";
import key from "./private/key";

const searchImages = async (term) => {
  // make sure the URL is correct
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      // header is important as it was mentioned in API Documentation
      headers: {
        Authorization: `Client-ID ${key}`,
      },
      //parameters will get attach automatically to the link
      params: {
        query: term,
      },
    });
    /*
      console.log(response); //will show status and extra details of request made
      console.log(response.data.results); // array contaning links to photos
      console.log(response.data); // array containing meta data + results
    */
    return response.data.results;
  } catch (err) {
    // exception handling is important because when user send blank data
    // to API the returned value is undefined and that thows error in
    // the browser window. A BAD way to handle anomaly.
    console.error(err.message, ":", err);
  }
};

export default searchImages;
