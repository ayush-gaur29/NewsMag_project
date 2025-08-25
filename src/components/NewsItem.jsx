 import image from '../assets/deadpool.jpg'
 
 const NewsItem = ({title, description, src, url}) =>{

    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{maxWidth:"300px"}}>
  <img src={src?src:image} style={{height:"200px", width:"280px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,40)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is a report of a current event. It is information about something that has just happened"}</p>
    <a href={url} className="btn btn-primary bg-danger">Read More</a>
  </div>
</div>
    )
}
export default NewsItem