import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {
  async beforeModel(transtition) {
    await super.beforeModel(transtition);
    const { id, channels } = this.modelFor('teams.team');
    if(channels.length > 0){
      // teams/:teamId/:channelId
      this.replaceWith(
        'teams.team.channel', 
        id,
        channels[1].id
      );
    }
  }
}