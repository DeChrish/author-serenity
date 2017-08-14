import { Open, PerformsTasks, Task, step } from 'serenity-js/lib/screenplay-protractor';     // imports the @step

export class Start implements Task {

    static withATodoListContaining(items: string[]) {
        return new Start(items);
    }

    @step('{0} starts with a Todo List containing #items')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/editor.html/content/kporg-test/en/national/global-shared/author-test/test.html'),
        );                                                      // which converts a list to vararg
    }

    constructor(private items: string[]) {
    }
}