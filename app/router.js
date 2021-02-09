import EmberRouter from '@ember/routing/router';
import config from 'ember-enroll/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('signup');
  this.route('enrollment-application', function() {
    this.route('about-you');
    this.route('financial-information');
    this.route('other');
  });
});
