import { Component, React } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
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
      return <div></div>;
    }
  }
  renderComments(comments) {
    if (comments != null) {
      return (
        <>
          <ul className="list-unstyled">
          <h4>Comments</h4>

            {comments.map((comment) => {
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
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <>
          <div className="row col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="row col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Dishdetail;
