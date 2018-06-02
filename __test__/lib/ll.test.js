'use strict';

let LL = require('../../lib/ll.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {  
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'Another One';
    list.append(anotherOne);
    expect(list.head.next.next.value).toEqual(anotherOne);
  });

  it('prepend()', () => {  
    let list = new LL();
    let initialValue = 'First One';
    list.prepend(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'New Head';
    list.prepend(newValue);
    expect(list.head.value).toEqual(newValue);

    let newerValue = 'Brand New Head';
    list.prepend(newerValue);
    expect(list.head.next.value).toEqual(newValue);
  });

  it('reverse()', () => {  
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    let secondValue = 'Second Thing';
    list.append(secondValue);
    let thirdValue = 'Third Thing';
    list.append(thirdValue);    
       
    list.reverse();
    expect(list.head.value).toEqual(thirdValue);
  });

  it('remove()',() => {  
    let list = new LL();
    let initialValue = 1;
    list.append(initialValue);
    let secondValue = 2;
    list.append(secondValue);
    let thirdValue = 3;
    list.append(thirdValue);  
    
    list.remove(list, 'Boo');
    expect(list.head.next.next.value).toEqual(thirdValue);

    list.remove(list, 2);
    expect(list.head.next.value).toEqual(thirdValue);

    list.remove(list, 1);
    expect(list.head.value).toEqual(thirdValue);
  })


});