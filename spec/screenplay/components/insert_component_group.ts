import { Target, Question, Text } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

export class InsertComponentGroup {
    static Component_Parsys = Target.the('"Drag Component here" parsys').located(by.css('div[title="Drag components here"]'));
    static Insert_Component = Target.the('"Insert Component" button icon').located(by.css('button[data-action="INSERT"]'));
    static Close_Component_Group = Target.the('"Close Component Group" button icon').located(by.xpath("//div[@class='coral-Modal coral--dark InsertComponentDialog'][not(contains(@style,'display: none'))] //button"));
    //static Items_Displayed: Question<string[]> = Text.ofAll(TodoList.Items);
}