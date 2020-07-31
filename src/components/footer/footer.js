import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component {

  render () {
    return (
      <div className='footer-wrap'>

        <div className='row'>

          <div className='primary'>

            <div className='col1'>
              <strong>Контакты</strong>
              <p>
                <a href='mailto:vimbi@mail.ru'>vimbi@mail.ru</a>
                <br/>
                <a href='tel://9176589888'>+7 917 658 98 88</a>
                <br/>
                <span>Russian Federation, Chuvash Republic, Cheboksary</span> 
              </p>
            </div>

            <div className='col2'>
              <strong>BRAINDUST NEWSLETTER</strong>
              <form>
                <div className='form-row'>
                  <input type='email' name='email' placeholder='Email Address'></input>
                  <button className='subbtn' type='submit' name='submit'></button>
                </div>
                <div className='error'></div>
              </form>
            </div>

            <div className='col3'>
              
              <a className='footer-link' href='https://github.com/Vimbi'><img src={require('../img/github.svg')} alt='Github'></img></a>
              <a className='footer-link' href='https://codepen.io/vimbi-the-bashful'><img src={require('../img/codepen.png')} alt='Codepen'></img></a>
              <a className='footer-link' href='https://www.codewars.com/users/Vimbi'><img src={require('../img/codewars.png')} alt='Codewars'></img></a>
            </div>

          </div>

        </div>
        
      </div>
    )
  }
}