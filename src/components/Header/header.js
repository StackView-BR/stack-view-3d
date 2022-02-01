import React, { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: "0%",
      back: "rgba(0,0,0,0.1)",
      flip: "rgba(0,0,0,0.1)",
      open: false,
      offset: "-100%",
      to: "i",
      to2: "i",
      rotate: "-90",
      display: "none",
      color: "black",

    };


    this.handleScroll = this.handleScroll.bind(this);

  }

  handleUp = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }
  handleContact = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToBottom();

  }

  handleClick = (e) => {
    if (this.state.open) {
      this.setState({
        open: false,
        offset: "-100%",
        to: "i",
        to2: "i",
        rotate: "-90",

      })
    } else {
      this.setState({
        open: true,
        offset: "0%",
        back: "black",
        flip: "white",
        to: "a",
        to2: "",
        rotate: "0",

      })

    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    if (window.pageYOffset >= window.innerHeight * 1.5 && window.pageYOffset <= totalHeight) {
      this.setState({
        back: "black",
        display: "",
        flip: "white",
      })
    } else if ((window.pageYOffset >= totalHeight || window.pageYOffset <= window.innerHeight * 1.5) && !this.state.open) {
      this.setState({
        back: "rgba(0,0,0,0.1)",
        display: "none",
        flip: "rgba(0,0,0,0.1)",
      })
    }
    if (window.pageYOffset <= totalHeight - (window.innerHeight / 4)) {
      this.setState({
        color: "black",
      })
    } else if (window.pageYOffset >= totalHeight - (window.innerHeight / 4)) {
      this.setState({
        color: "white",
      })
    }
    this.setState({
      progress: 100 - ((window.pageYOffset / totalHeight) * 100) + "%",
    });

  };

  render() {


    return (


        <div className="header" style={{ backgroundColor: this.state.back }} position="fixed">

          <a className="logoname" style={{ fontSize: "x-large" }} href="#main">
            <span className="stack skip-link" >s</span >
            <span style={{ display: this.state.display }} className="sv s">s</span>
            <span style={{ display: this.state.display }} className="sv t">t</span>
            <span style={{ display: this.state.display }} className="sv a">a</span>
            <span style={{ display: this.state.display }} className="sv c">c</span>
            <span style={{ display: this.state.display }} className="sv k">k</span>
            <span className="view">v</span>
            <span style={{ display: this.state.display }} className="sv v">v</span>
            <span style={{ display: this.state.display }} className="sv i">i</span>
            <span style={{ display: this.state.display }} className="sv e">e</span>
            <span style={{ display: this.state.display }} className="sv w">w</span>
          </a>
          <div className="menu suma">
          <a href="/we" ><button><a className="custom">About</a></button></a>
            <a href="https://www.behance.net/StackView"><button><a className="custom">Portfolio</a></button></a>
            <a href="/we" ><button><a className="custom">Developers</a></button></a>
            <a href=""  ><button onClick={this.handleContact}><a className="custom">Contact Us</a></button></a>

          </div>

          <div onClick={this.handleClick} style={{ backgroundColor: this.state.flip, transform: "rotate(" + this.state.rotate + "deg)" }} className="navicon apareca"><div className="center"><a href="#" className="view">{this.state.to2}</a><a href="#" className="stack">{this.state.to}</a></div></div>
          <div className="collapso apareca" style={{ transform: "translateY(" + this.state.offset + ")" }}>
            <div className="menu">
              <img
                id="icon"
                src="/viewicons/iconStackView.svg"
                alt="stackview"
                height="100px"
                width="100px"
              />
              <div className="links"><a href="https://www.behance.net/StackView" ><button><a className="custom" href="#">Portfolio</a></button></a> <br />
                <a href="/we" ><button><a className="custom" href="#" >Developers</a></button></a><br />
                <a href="" onClick={this.handleContact} ><button><a className="custom" href="#">Contact Us</a></button></a></div><br />
              <div className="info">
                <address className="endereco">
                  
                    <p>
                      <a href="tel:+5517988309968">
                        Phone: <br /> +5517988309968
                        </a>
                      <br /><br />
                      <a href="mailto:contact@stackview.com.br">
                        Email: <br />contact@stackview.com.br
                        </a>
                    </p>
                  
            Address:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil

            </address>
                <div className="w"><a href="https://api.whatsapp.com/send?phone=5517988309968"><a><img
                  id="w"
                  src="/icons/whats.png"
                  width="auto"
                  alt="whatsapp"
                /></a></a>

                  <a href="https://t.me/stackviewbr"><a className="t" ><img
                    id="t"
                    src="/icons/tel.png"
                    alt="telegram"
                    width="auto"

                  /></a></a>
                </div>
              </div>

            </div>
            <div className="stackview"><div className="rotate"><a href="#" className="stack">stack</a><a href="#" className="view">view</a></div></div>
          </div>
         

        </div>


    );
  }

}

export default Header;