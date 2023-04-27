import React, { useState } from 'react'
import { Container, Form, Modal, Nav, Navbar} from 'react-bootstrap'
import './NavBar.css';
import {FaGit} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import {FiPlusSquare} from 'react-icons/fi';
import {AiOutlineBell} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi';
import {IoMdClose} from 'react-icons/io';
function NavBar() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
   
    
    <Navbar  collapseOnSelect expand="lg"  className='navbar'>
      <Container >
        <Navbar.Brand href="/">
            <FaGit className='git-icon'/> 
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="md-auto">
            
            <Nav.Link>
            <Form className="d-flex inputsearch">
            <Form.Control
              type="search"
              placeholder="Search or jump to..."
              className="me-2 inputplaceholder"
              aria-label="Search"
            />
            <BiSearch className='search-icon'/>
          </Form>
            </Nav.Link>
          
          </Nav>
          <Nav>
          <Nav.Link>
            <p className='navlinke1'  > Pull requests</p>
        </Nav.Link>
        <Nav.Link >
            <p className='navlinke1'>Issues</p>
       
        </Nav.Link>
        <Nav.Link >
            <p className='navlinke1'>Codespaces</p>
        </Nav.Link>
        <Nav.Link >
            <p className='navlinke1'>Marketplace</p>
        </Nav.Link>
        <Nav.Link >
            <p className='navlinke1'>Explore</p>
        </Nav.Link>
    
          </Nav>
      
        </Navbar.Collapse>   
       
        <Modal show={show} onHide={handleClose} className="mymodal">
        <Modal.Body className="modalbody">
          <FaGit className='git-icon-modal'/>
          <div className='nav-modal'>
            <p className='navlinke1' href="/pullrequest"> Pull requests</p>
       
            <p className='navlinke1'>Issues</p>
       
            <p className='navlinke1'>Codespaces</p>
     
            <p className='navlinke1'>Marketplace</p>
    
            <p className='navlinke1'>Explore</p>
     </div>
     <div className="dropdown" id="nav-user-modal">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/user"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <span class="position-absolute top-0  translate-middle p-1 bg-primary border border-dark rounded-circle badgee">
           <span class="visually-hidden">New</span>
           </span>
           <ul
          className="dropdown-menu dropdown-menu-start"
          aria-labelledby="navbarDropdownMenuLink"
          id="drop-ul"
        >
         <a class="nav-link" href="/login">
          <span>
          <i class="fas fa-user-alt home"></i>
            </span>
          <h7>Login</h7>
            </a>
            <a class="nav-link" href="/register">
          <span><i class="fas fa-cog home"></i></span>
          <h7>Register</h7>
            </a>
            <a class="nav-link" href="/logout">
          <span><i class="fas fa-sign-out-alt home"></i></span>
          <h7>Logout</h7>
            </a>
           
        </ul>
      </div>
      <div className="dropdown" id="nav-user-modal2">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          href="/user"
        >

< FiPlusSquare className='plus-icon-modal'/>
  
         

        </a>
      

   

           <ul
          className="dropdown-menu dropdown-menu-start"
          aria-labelledby="navbarDropdownMenuLink"
          id="drop-ul"
        >
         <a class="nav-link" href="/users">
          <h7>New repositry</h7>
            </a>
            <a class="nav-link" href="/users">
            <h7>Import repositry</h7>          
            </a>
            <a class="nav-link" href="/users">
            <h7>New codespace</h7>          
            </a>
            <a class="nav-link" href="/users">
            <h7>New gist</h7>          
            </a>
            <a class="nav-link" href="/users">
            <h7>New organization</h7>          
            </a>
            <a class="nav-link" href="/users">
            <h7>New project</h7>          
            </a>
           
        </ul>
      </div>
     
      <div className="dropdown" id="nav-user-modal2">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          href="/user"
        >

< AiOutlineBell className='bell-icon-modal '/>
  
         

        </a>
      
        <span class="position-absolute top-0  translate-middle p-1 bg-danger border border-dark rounded-circle badgee">
           <span class="visually-hidden">New</span>
           </span>
   

           <ul
          className="dropdown-menu dropdown-menu-start"
          aria-labelledby="navbarDropdownMenuLink"
          id="drop-ul"
        >
         <a class="nav-link" href="/facebook">
          <span><i class="fab fa-facebook home"></i></span>
          <h7>Facebook</h7>
            </a>
            <a class="nav-link" href="/whatsapp">
          <span><i class="fab fa-whatsapp home"></i></span>
          <h7>Whatsapp</h7>
            </a>
            <a class="nav-link" href="/instagram">
          <span><i class="fab fa-instagram home"></i></span>
          <h7>Instagram</h7>
            </a>
           
        </ul>
      </div>
      <Form className="d-flex inputsearch-modal">
            <Form.Control
              type="search"
              placeholder="Search or jump to..."
              className="me-2 inputplaceholder"
              aria-label="Search"
            />
            <BiSearch className='search-icon'/>
          </Form>
   <div className="close-icon-modal">
            <IoMdClose onClick={handleClose}    className="close-icon" />

   </div>


        </Modal.Body>

      </Modal>


      <Nav.Link> 
        <div className='drop'>
             <div class="nav-item dropdown drop-bell" id="nav-drop">
        <a
          className="nav-link dropdown-toggle hidden-arrow"
          href="/notifications"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >


          < AiOutlineBell className='plus-icon'/>
         
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-dark rounded-circle badgee">
           <span class="visually-hidden">New</span>
  </span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end mydrop"
          aria-labelledby="navbarDropdownMenuLink"
          id="drop-ul"
        >
       
            <a class="nav-link" href="/facebook">
          <span><i class="fab fa-facebook home"></i></span>
          <h7>Facebook</h7>
            </a>
            <a class="nav-link" href="/whatsapp">
          <span><i class="fab fa-whatsapp home"></i></span>
          <h7>Whatsapp</h7>
            </a>
            <a class="nav-link" href="/instagram">
          <span><i class="fab fa-instagram home"></i></span>
          <h7>Instagram</h7>
            </a>
            <a class="nav-link" href="/instagram">
          <span><i class="far fa-comment-alt home"></i></span>
          <h7>Messages</h7>
            </a>
        </ul>
      </div>
     </div>
      </Nav.Link>
       
      <Nav.Link> 
        <div className='drop'>
             <div class="nav-item dropdown drop-plus" id="nav-drop">
        <a
          className="nav-link dropdown-toggle hidden-arrow"
          href="/notifications"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          < FiPlusSquare className='plus-icon'/>
         
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end mydrop"
          aria-labelledby="navbarDropdownMenuLink"
          id="drop-ul"
        >
         <a class="nav-link" href="/users">
          <h8>New repositry</h8>
            </a>
            <a class="nav-link" href="/users">
            <h8>Import repositry</h8>          
            </a>
            <a class="nav-link" href="/users">
            <h8>New codespace</h8>          
            </a>
            <a class="nav-link" href="/users">
            <h8>New gist</h8>          
            </a>
            <a class="nav-link" href="/users">
            <h8>New organization</h8>          
            </a>
            <a class="nav-link" href="/users">
            <h8>New project</h8>          
            </a>
        </ul>
      </div>
     </div>
      </Nav.Link>
        <Nav.Link href='/login'>
      <div className="dropdown drop-user">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/login"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-primary border border-dark rounded-circle badgee">
           <span class="visually-hidden">New</span>
           </span>
           <ul
          className="dropdown-menu dropdown-menu-end mydrop"
          aria-labelledby="navbarDropdownMenuLink"
          id="drop-ul3"
        >
        
         <a class="nav-link" href='/login'>
         <i class="fas fa-user-alt nav-profil"></i>
          <h7>Login</h7>
            </a>
            <a class="nav-link" href='/register'>
         <i class="fas fa-user-alt nav-profil"></i>
          <h7>Register</h7>
            </a>
            <a class="nav-link" href="/logout">
            <span><i class="fas fa-sign-out-alt nav-logout"></i></span>
          <h7>Logout</h7>
            </a>
           
        </ul>
      </div>


        </Nav.Link>

        <HiMenu className='menu-icon'  onClick={handleShow}/>





      </Container>
    </Navbar>
 
  )
}

export default NavBar;