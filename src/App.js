import './App.css';
import Frame2 from './components/frame2';
import Frame3 from './components/frame3';
import Frame5 from './components/frame5';
import Frame6 from './components/frame6';
import Frame7 from './components/frame7';
import Frame8 from './components/frame8';
import Frame9 from './components/frame9';
import Header from './components/header';
import Frame1 from './components/products/frame1';
import Products from './components/products/products';

function App() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav> */}

      <Header/>
      <Frame1/>
      <Frame2/>
      <Frame3/>
      <Products/>
      <Frame5/>
      <Frame6/>
      <Frame7/>
      <Frame8/>
      <Frame9/>
      
    </div>
  );
}

export default App;
