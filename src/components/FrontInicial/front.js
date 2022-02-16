import React from 'react';

class Front extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offsetY:"0",    
    
        };    
        this.handleScroll = this.handleScroll.bind(this);    
      }
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll(event) {
        
        this.setState({
            offsetY: window.pageYOffset*0.5 +"px",
        });
    
      };

render(){

    return <div className="front parallax" style={{backgroundPositionY:this.state.offsetY}}>
       
        <div className="icon">
        
            <img
            id="back"
            src="/viewicons/nodisk.svg"
            alt="stackview"
            layout="fill"
        /><div className="front"><img
                id="f"
                src="/viewicons/disk.svg"
                alt="stackview"
                layout="fill"
                
            /></div>
            </div>
        <div className="stack">
            <div className="sv s">Stack</div>
            <div className="sv v">View</div>
        </div>
        
        <div className="fdd">
            <div className="f custom">Engineering</div>
            <div className="d custom">design</div>
            <div className="m custom" >fullstack development</div>
        </div>
    </div>
}
    


}

export default Front;