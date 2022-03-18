import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProductDetails = (props) => {
    const { title, price, category, image } = props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow} style={{ backgroundColor: 'rgb(8, 143, 221)' }}>View</Button>

            <Modal show={show} onHide={handleClose} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <div className="text-center">
                    <img className='w-50 p-4' src={image} alt="" />
                </div>
                <Modal.Body>
                    <h6>Category: {category}</h6>
                    <h3>Price: {price}TK</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductDetails;