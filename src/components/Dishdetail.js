import { React } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle  , Breadcrumb , BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({dish}) {
  if (dish != null) {
    return (
      <div>
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

function RenderComments({comments}) {
  console.log(comments)


  if (comments ) {
    return (
      <>
        <ul className="list-unstyled">
          <h4>Comments</h4>


          {Array.isArray(comments) && comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return( <div></div>);
  }
}

function  Dishdetail({dish ,comment})  {
 
  // componentDidMount(){
  //   console.log(" Dishdetail componentDidMount is invoked")
  // }

  // componentDidUpdate(){
  //   console.log(" Dishdetail componentDidUpdate is invoked")
  // }

  if (dish != null) {
  return(
    // console.log(" Dishdetail render is invoked")
        <>
          <div className="container">
          <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>  <Link to='/menu'>Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active> {dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
            <div className="row">
              <div className="row col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
              </div>
              <div className="row col-12 col-md-5 m-1">
                <RenderComments  comments={comment} />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div></div>
      );
    }
  
}

export default Dishdetail;
