import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="container-fluid">
      <div className="navBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="col-md-4 text-center">
            <a className="navbar-brand " href="#" >Start Bootstrap</a>
          </div>
          <div className="col-md-4"></div>
          <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-right">
              <li className="nav-item ">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card col-md-3 ">
            <img src="https://picsum.photos/seed/picsum/80/50" className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary ">Go somewhere</a>
            </div>
          </div>
          <div className="card col-sm-3">
            <img src="https://picsum.photos/seed/picsum/80/50" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card col-sm-3">
            <img src="https://picsum.photos/seed/picsum/80/50" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card col-sm-3">
            <img src="https://picsum.photos/seed/picsum/80/50" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">.</div>
      <div className="col-md-12">.</div>
      <div className="bottom col-md-12 bg-dark ">

        <span className="copyright">Copyright @ Your Website 2021</span>

      </div>

    </div>
  );
}

export default App;
