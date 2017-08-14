import { Target, Question, Text } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

export class LoginForm {
    static Username_Field = Target.the('"User name" input box').located(by.id('username'));
    static Password_Field = Target.the('"Password" input box').located(by.id('password'));
    static Submit_Button = Target.the('"Sign In" button').located(by.id('submit-button'));
    //static Items_Displayed: Question<string[]> = Text.ofAll(TodoList.Items);
}