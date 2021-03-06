import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';
import fetch from 'fetch';

export default class TeamsRoute extends Route {
  /**
   * @type {AuthService}
   */

  @service auth;
  async beforeModel(transtition) {
    await super.beforeModel(transtition);
    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }

  async model() {
    const response = await fetch('/api/teams/');
    return await response.json();
  }
}
