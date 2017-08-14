import { Actor, BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
import { protractor } from 'protractor';
import { serenity } from 'serenity-js';

import { Start, Login, AddAButtonComponent } from '../../spec/screenplay/tasks';
import { expect } from '../../spec/expect';
import { LoginForm } from '../../spec/screenplay/components/login_aem';
import { InsertComponentGroup } from '../../spec/screenplay/components/insert_component_group';




export = function todoUserSteps() {

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.
    let stage = serenity.callToStageFor({
        actor: (name) => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser))
    });
    
    // this.Given(/^that (.*) has access to author instance to author the button component$/, function (name: string) {
    //      // Write code here that turns the phrase above into concrete actions
    //      return stage.theActorCalled(name).attemptsTo(
    //          Login.withValidCredentials()
    //      );
    //    });

    this.Given(/^that (.*) has access to author instance to author the button component$/, function (name: string) {
        // Write code here that turns the phrase above into concrete actions
        return stage.theActorCalled(name).attemptsTo(
            Login.withValidCredentials()
        );
      });

    //  this.When(/^he adds Button component to test page$/, function () {
    //     return stage.theActorInTheSpotlight().attemptsTo(
    //         AddAButtonComponent.called("Button")
    //     )
    //    });   
    
    // this.Then(/^his bbutton page should contain Button component$/, function (callback) {
    //      // Write code here that turns the phrase above into concrete actions
    //      callback(null, 'pending');
    //    });
};
