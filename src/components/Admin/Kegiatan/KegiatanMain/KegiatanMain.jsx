import React, { useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "../../../../assets/book.jpg";

const KegiatanMain = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  };
  return (
    <Container>
      <div className="kegiatan-content mt-5">
        <div className="search-container" >
          <div
            className={`search-input d-flex align-items-center ${
              focus ? "focus" : "null"
            }`}
            onFocus={handleFocus}
            onBlur={handleFocus}
          >
            <input type="text" class="form-control" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass pe-3"></i>
            
          </div>
          <div className="header d-flex justify-content-end">
          <Link to={"add-kegiatan"}>
            <button className="btn-add-kastrat ">Add Kegiatan</button>
          </Link>
        </div>
        </div>
        
        <div className="kegiatan-highlight-container">
          <Row>
            <Col md={6}>
              <div className="d-flex justify-content-center">
                <div className="book-container-highlight">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
                <div className="book-container-highlight">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center">
                <div className="book-container-highlight">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
                <div className="book-container-highlight">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <Link to="kegiatan-detail">
                    <img src={book} alt="cover" className="img-fluid" />
                    <p className="mt-2">Harry Potter & The Winter Soldier</p>
                    <p>by SMF FEB UKSW</p>
                  </Link>
                </div>
              </div>
            </Col>
            
          </Row>
        </div>
        <div className="kegiatan-more-container">
          <div className="more p-3 m-2">
            <h5 className="text-start">Read more from FEB UKSW</h5>
          </div>
          <Row>
            <Col lg={4}>
              <div className="d-flex justify-content-center">
                <div className="book-container">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
                <div className="book-container">
                  <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex justify-content-center">
                <div className="book-container">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
                <div className="book-container">
                  <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex justify-content-center">
                <div className="book-container">
                <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
                <div className="book-container">
                  <div className="options d-flex justify-content-end mb-2">
                      <Dropdown
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex justify-content-start align-items-center"
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <p className="m-0 ms-2 ">Delete</p>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  <img src={book} alt="cover" className="img-fluid" />
                  <p className="mt-2">Harry Potter & The Winter Soldier</p>
                  <p>by SMF FEB UKSW</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default KegiatanMain;
