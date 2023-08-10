/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// Write your code here
import {FaBars} from 'react-icons/fa'
import {BsInfoLg, BsX} from 'react-icons/bs'
import {Component} from 'react'

import Popup from 'reactjs-popup'

class Header extends Component {
  state = {isClicked: false}

  getPopup = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            onClick={this.clickOnButton}
          >
            <BsX />
          </button>
        }
      >
        <p>Home</p>
        <p>About</p>
      </Popup>
    </div>
  )

  getNavBar = () => (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <button
        type="button"
        className="trigger-button"
        onClick={this.clickOnButton}
      >
        <FaBars />
      </button>
    </nav>
  )

  clickOnButton = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state

    return <div>{isClicked ? this.getPopup() : this.getNavBar()}</div>
  }
}
export default Header
