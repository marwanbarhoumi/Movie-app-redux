import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addmovier } from "../JS/action/actions";

function Add() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [newMovie, setnewMovie] = useState({
    title: " ",
    description: "",
    img: "",
    rating: 0
  });

  const handlechange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handlesumbit = () => {
    const film={...newMovie, id: Math.random(), fav: false }
    if (
      !newMovie.title ||
      !newMovie.description ||
      !newMovie.img ||
      !newMovie.rating
    ) {
      alert('complet Add');
    }
    dispatch(addmovier(film));
    navigate("/list")
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body></Modal.Body>
        <form>
          <label htmlFor="text">title</label>
          <input type="text" name="title" id="" onChange={handlechange} />
          <br />
          <label htmlFor="text">description</label>
          <input type="text" name="description" id="" onChange={handlechange} value={newMovie.description}/>
          <br />
          <label htmlFor="text">img</label>
          <input type="url" name="" id="" onChange={handlechange} value={newMovie.img}/>
          <br />
          <label htmlFor="rating">rating</label>
          <input type="number" name="" id="" onChange={handlechange}value={newMovie.rating} />
          <br />
        </form>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>

          <Button variant="primary" onClick={handlesumbit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Add;
