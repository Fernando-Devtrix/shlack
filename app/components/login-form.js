import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = "1";
  
  get isDisabled() {
    return !this.userId;
  }
  
  loginWithUserId(val) {
    console.log("User id ", val);
  }

  /**
   * 
   * @param {Event & { target: HTMLSelectElement }} evt 
   */
  @action
  onSelectedChanged(evt) {
    this.userId = evt.target.value
  }

  /**
   * 
   * @param {Event & { target: HTMLSelectElement }} evt 
   */
  @action
  onLoginSubmit(evt) {
    const { target } = evt;
    const val = target.querySelector('select').value;
    evt.preventDefault();
    // debugger;
    this.loginWithUserId(val);
  }
}
