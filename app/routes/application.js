// application/route.js or routes/application.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service indexedDb;

  beforeModel() {
    this._super(...arguments);

    return this.indexedDb.setupTask.perform();
  }
}
