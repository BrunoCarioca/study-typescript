import { expect, test} from "vitest";
import List from "../../src/structure/list_simple";

test ("list simple", () => {
    
    let list = new List();
    let book = {title: 'Livro 1', price: 10};
    
    expect(list.isEmpty()).toBeTruthy();
    list.add(book);
    expect(list.size()).toBe(1);
    expect(list.search(book)).toMatchObject({value: book,
                                            next: null});
    list.remove(book);
    expect(list.isEmpty()).toBeTruthy();
    console.log(list.isEmpty());
    console.log(list.show());


});
