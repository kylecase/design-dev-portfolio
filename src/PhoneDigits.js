import React from 'react';

const PhoneDigits = (props) => (
    <div className="phone-digits">
      <div className="digit-row">
        <div className="digit">1</div>
        <div className="digit">2</div>
        <div className="digit">3</div>
      </div>
      <div className="digit-row">
        <div className="digit">4</div>
        <div className="digit">5</div>
        <div className="digit">6</div>
      </div>
      <div className="digit-row">
        <div className="digit">7</div>
        <div className="digit">8</div>
        <div className="digit">9</div>
      </div>
      <div className="digit-row">
        <div className="digit">*</div>
        <div className="digit">0</div>
        <div className="digit">#</div>
      </div>
      <div className="digit-row">
        <div className="call"></div>
      </div>
    </div>
)

export default PhoneDigits;
