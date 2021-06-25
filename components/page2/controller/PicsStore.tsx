// interface PicsData {
//   id: number;
//   title: string;
//   completed: boolean;
// }

interface JsonData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

class PicsStore {
  //     export interface Todo {
  //   id: number;
  //   text: string;
  //   done: boolean;
  // }
  picsData: JsonData[] = [];
  fetchPicsFromUnsplash = () => {
    fetch(
      "https://jsonplaceholder.typicode.com/photos"
      //   {
      //     // fetch("https://picsum.photos/200/300", {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //   }
    )
      .then((resp) => {
        //   console.log(JSON.stringify(resp));
        //   this.picsData=resp.json()
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        return this.picsData.push(data);
      });
    // //   .then((data) => ());
    console.log(`picsData ${this.picsData}`);
  };
}

const picsStore = new PicsStore();
export default picsStore;
