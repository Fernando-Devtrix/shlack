import Route from '@ember/routing/route';

export default class TeamsIndexRoute extends Route {
  async beforeModel(transtition) {
    await super.beforeModel(transtition);
    const { teams } = this.modelFor('teams');
    if(teams.length > 0){
      this.replaceWith('teams.team', teams[0].id);
    }
  }
}
