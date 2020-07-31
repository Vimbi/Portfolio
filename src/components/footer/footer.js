import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component {

  render () {
    return (
      <div className='footer-wrap'>

        <div className='row'>

          <div className='primary'>

            <div className='col'>
              <strong>Контакты</strong>
              <p>
                <a href='mailto:vimbi@mail.ru'>vimbi@mail.ru</a>
                <br/>
                <a href='tel://9176589888'>+7 917 658 98 88</a>
                <br/>
                <span>Russian Federation, Chuvash Republic, Cheboksary</span> 
              </p>
            </div>

            <div className='col'>
              <strong>BRAINDUST NEWSLETTER</strong>
              <form>
                <div className='form-row'>
                  <input type='email' name='email' placeholder='Email Address'></input>
                  <button className='subbtn' type='submit' name='submit'></button>
                </div>
                <div className='error'></div>
              </form>
            </div>

            <div className='col'>
              <strong>3</strong>
              <p>123</p>
            </div>

          </div>

        </div>
        
      </div>
    )
  }
}