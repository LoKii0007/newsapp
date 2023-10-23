import React,{useState} from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/news";
import LoadingBar from 'react-top-loading-bar'


//                    --------------------FUNCTION BASED-----------------------------


export default function App(){

  const apikey = process.env.REACT_APP_NEWS_API;
  const pageSize = 15;

  const [progress, setProgress] = useState(0)


    return (
      <>
      <Router>

      <LoadingBar
        color='#f11946'
        progress= {progress}
        height={3}
      />

        <Navbar />

        <Routes>
        <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" category="general" pagesize={pageSize}/>}></Route>
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" category="Business" pagesize={pageSize}/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key ="sports" category="sports" pagesize={pageSize}/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" category="science" pagesize={pageSize}/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="ent" category="entertainment" pagesize={pageSize}/>}></Route>
          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" category="general" pagesize={pageSize}/>}></Route>
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health"  category="health" pagesize={pageSize}/>}></Route>
          <Route path="/tech" element={<News setProgress={setProgress} apikey={apikey} key="tech" category="technology" pagesize={pageSize}/>}></Route>
        </Routes>

      </Router>
      </>
    );
}


//                    --------------------CLASS BASED-----------------------------


// import React, { Component } from "react";
// import Navbar from "./components/navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import News from "./components/news";
// import LoadingBar from 'react-top-loading-bar'


// export default calss App extends component{

//   apikey = process.env.REACT_APP_NEWS_API;
//   pageSize = 15;

//   state ={
//     progress:0
//   }

//   setProgress =(progress)=>{
//     this.setState({
//       progress:progress
//     })
//   }

//   render(){

//     return (
//       <>
//       <Router>

//       <LoadingBar
//         color='#f11946'
//         progress= {this.state.progress}
//         height={3}
//       />

//         <Navbar />

//         <Routes>
//         <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" category="general" pagesize={this.pageSize}/>}></Route>
//           <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" category="Business" pagesize={this.pageSize}/>}></Route>
//           <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key ="sports" category="sports" pagesize={this.pageSize}/>}></Route>
//           <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" pagesize={this.pageSize}/>}></Route>
//           <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="ent" category="entertainment" pagesize={this.pageSize}/>}></Route>
//           <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" category="general" pagesize={this.pageSize}/>}></Route>
//           <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health"  category="health" pagesize={this.pageSize}/>}></Route>
//           <Route path="/tech" element={<News setProgress={this.setProgress} apikey={this.apikey} key="tech" category="technology" pagesize={this.pageSize}/>}></Route>
//         </Routes>

//       </Router>
//       </>
//     );
//     }
// }
