import React from 'react';
import './App.css';
import chairImage from './img/chair.png';
import shareImage from './img/share.jpg';
import bathImage from './img/bathroom.jpg';


class Section extends React.Component {
  state = { showing: true };
  render() {
    const { showing } = this.state;
    return (
      <section className='step-section'>
        <div className="container">
          <div className="heading">
            <div className="heading-inner">
              <h2><strong>Step One</strong> Customize Your Flight</h2>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={chairImage} alt="Customize Your Flight" />
          </div>
          <div className="on-budget-wrapper">
            <div className="on-budget-heading">
              <h4>On Budget Class</h4>
            </div>
            <div className="on-budget-row">
              <div className="on-budget-left">
                <div className="img-wrap">
                  <img src={shareImage} alt="Share You Seat" />
                </div>
                <div className="text-wrap">
                  <h3>SHARE YOU SEAT</h3>
                  <div className="checkbox-wrapper">
                    <div className="check-wrap">
                      <input type="radio" name="shareSeat" id="shareSeat1" />
                      <label htmlFor="shareSeat1">No sharing</label>
                    </div>
                    <div className="check-wrap">
                      <input type="radio" name="shareSeat" id="shareSeat2" />
                      <label htmlFor="shareSeat2">Share seat</label>
                      <span className='tooltip-wrap'>
                        <div className="question">?</div>
                        <span className="tooltip">
                          Take turns sitting. Choose number of people to share your seat with (1 or 2). If you select 2, the greater the discount applied.
                        </span>
                      </span>
                    </div>
                    <div className="check-wrap">
                      <input type="radio" name="shareSeat" id="shareSeat3" />
                      <label htmlFor="shareSeat3">Share meal</label>
                    </div>

                  </div>
                </div>
              </div>
              <div className="on-budget-right">
                <div className="img-wrap">
                  <img src={bathImage} alt="Share You Seat" />
                </div>
                <div className="text-wrap">
                  <h3>PAY FOR BATHROOM</h3>
                  <div className="checkbox-wrapper">
                    <div className="check-wrap">
                      <input type="radio" name="sharebath" id="sharebath1" />
                      <label htmlFor="sharebath1">Dont use, dont pay</label>
                    </div>
                    <div className="check-wrap">
                      <input type="radio" name="sharebath" id="sharebath2" />
                      <label htmlFor="sharebath2">Pay for short time</label>
                    </div>
                    <div className="check-wrap">
                      <input type="radio" name="sharebath" id="sharebath3" />
                      <label htmlFor="sharebath3">Pay for long time</label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrap">
              {showing ? <button onClick={() => this.setState({ showing: !showing })}>Continue</button> : <div className='thankyou'>Thank You !!!</div> }
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Section;
