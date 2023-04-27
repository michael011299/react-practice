import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import PropTypes from 'prop-types';

const Cats = ({testCats}) => {
    return testCats.map((cat) => {
    return (
      <div className="col" key={cat.id}>
        <Card border='primary' >
          <Card.Header>{cat.id}</Card.Header>
          <Card.Body>
            <Image id={cat.id} src={cat.url} style={{height: '200px', width: '200px'}}/>
            <Card.Text>
              {" "}
              width:
              {cat.width}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });
};

Cats.propTypes = {
    testCats: PropTypes.arrayOf(PropTypes.shape(
        {
           id: PropTypes.string.isRequired,
           url: PropTypes.string.isRequired,
           height: PropTypes.number.isRequired,
           width: PropTypes.number.isRequired
        }
    )).isRequired
}

export default Cats;
