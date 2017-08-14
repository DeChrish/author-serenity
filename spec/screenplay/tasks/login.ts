import { Open, PerformsTasks, Task, step, Enter, Click } from 'serenity-js/lib/screenplay-protractor';     // imports the @step

import { LoginForm } from '../components/login_aem';

export class Login implements Task {

 static withValidCredentials() {
        return new Login();
    }

   @step('{0} login with admin author access #userid #password')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        // The Login Task is composed of three Interactions:
        return actor.attemptsTo(
            Open.browserOn('/editor.html/content/geometrixx/en/products/triangle/overview.html'),
            Enter.theValue('admin').into(LoginForm.Username_Field),
            Enter.theValue('admin').into(LoginForm.Password_Field),
            Click.on(LoginForm.Submit_Button)
        );
    }
}