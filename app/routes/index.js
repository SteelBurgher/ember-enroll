import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const users = await this.store.findAll('user');
    return users.firstObject;
  }
  afterModel(user) {
    // redirect to ongoing application if user has been created
    if (user) {
      this.transitionTo('enrollment-application');
    }
  }
}
