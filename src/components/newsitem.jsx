// -----------------CLASS BASED-------------

// import React, { Component } from 'react'

// export default class Newsitem extends Component {
//   render() {

//     let {title, description, imgurl,newsurl,source,author,date} = this.props;

//     return (

//       <div  >
//         <div className="card m-3" style={{width: "18rem"}}>
//         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span>
//           <img src={imgurl} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">{title}...</h5>
//               <p className="card-text">{description}...</p>
//               <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
//               <a href={newsurl} className="btn btn-primary">Read more</a>
//             </div>
//         </div>
//       </div>

//     )

//   }

// }


//               ---------------FUNCTION BASED---------------


import React from 'react'

const Newsitem =(props)=> {

    let {title, description, imgurl,newsurl,source,author,date} = props;

    return (

      <div>
        <div className="card m-3" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span>
          <img src={imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>

    )

}

export default Newsitem