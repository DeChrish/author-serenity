//import { Enter, PerformsTasks, Task, step, Click } from 'serenity-js/lib/screenplay-protractor'; // imports the @step
import { protractor, browser, element, by } from 'protractor';
import { InsertComponentGroup } from '../components/insert_component_group';

import {
    Actor,
    BrowseTheWeb,
    Clear,
    Click,
    Duration,
    Enter,
    Is,
    Open,
    PerformsTasks,
    Select,
    Target,
    Task,
    Wait,
    WebElement,
    step,
    Switch
} from 'serenity-js/lib/screenplay-protractor';

const Trigger_Delay   = Duration.ofMillis(2000),
          Not_Long_Enough = Duration.ofMillis(500),
          Long_Enough     = Duration.ofMillis(4000);

export class AddAButtonComponent implements Task {

    static called(itemName: string) {                       // static method to improve the readability
        return new AddAButtonComponent(itemName);
    }

    @step('{0} adds a Component Group called #itemName')          // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
        Wait.upTo(Long_Enough).until(InsertComponentGroup.Component_Parsys, Is.clickable()),
        Click.on(InsertComponentGroup.Component_Parsys),
        Click.on(InsertComponentGroup.Insert_Component),
        Click.on(InsertComponentGroup.Close_Component_Group)
        );
    }

    constructor(private itemName: string) {                 // constructor assigning the name of the item
    }                                                       // to a private field
}