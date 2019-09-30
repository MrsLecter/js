describe("insert/remove element", function() {
	it("addFirst: A B C. Expect: C B A", function(){
		let list = new LinkedList();
		list.addFirst("A");
		list.addFirst("B");
		list.addFirst("C");
		let str = list.printList();
		let answ = "C B A";
		assert.equal(str, answ, "false");
	});
	it("addLast: A B C. Expect: A B C", function(){
				let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		let str = list.printList();
		let answ = "A B C";
		assert.equal(str, answ, "false");
	});
	it("list: A B C. Remove first. Expect: B C", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.removeFirst();
		let str = list.printList();
		let answ = "B C";
		assert.equal(str, answ, "false");
	});
	it("list: A B C. Remove last. Expect: A B", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.removeLast();
		let str = list.printList();
		let answ = "A B";
		assert.equal(str, answ, "false");
	});
	it("list: A B C. remove(0). Expect: B C", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.remove(0);
		let str = list.printList();
		let answ = "B C";
		assert.equal(str, answ, "false");
	});
	it("list: A B C. remove(2). Expect: A B", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.remove(2);
		let str = list.printList();
		let answ = "A B";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D E. remove(2). Expect: A B D E", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.addLast("E");
		list.remove(2);
		let str = list.printList();
		let answ = "A B D E";
		assert.equal(str, answ, "false");
	});
});
describe("insertNodeAt element", function() {
	it("list: A B C D. insertNodeAt(0, 'Z'). Expected: Z A B C D", function() {
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.insertNodeAt(0, "Z");
		let str = list.printList();
		let answ = "Z A B C D";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D. insertNodeAt(3, 'Z'). Expected: A B C Z D", function() {
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.insertNodeAt(2, "Z");
		let str = list.printList();
		let answ = "A B Z C D";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D. insertNodeAt(3, 'X'). Expected: A B C Z D", function() {
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.insertNodeAt(3, "X");
		let str = list.printList();
		let answ = "A B C D X";
		assert.equal(str, answ, "false");
	});
});
describe("searchNodeAt()", function(){
	it("list: A B C D. searchNodeAt(1). Expect: B", function() {
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		let str = list.searchNodeAt(1).content;
		let answ = "B";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D. searchNodeAt(0). Expect: A", function() {
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		let str = list.searchNodeAt(0).content;
		let answ = "A";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D. searchNodeAt(3). Expect: D", function() {
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		let str = list.searchNodeAt(3).content;
		let answ = "D";
		assert.equal(str, answ, "false");
	});
});
describe("remove()", function(){
	it("list: A B C D. remove(0). Expect: B C D", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.remove(0);
		let str = list.printList();
		let answ = "B C D";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D. remove(3). Expect: A B C", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.remove(3);
		let str = list.printList();
		let answ = "A B C";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D. remove(2). Expect: A B D", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		list.remove(2);
		let str = list.printList();
		let answ = "A B D";
		assert.equal(str, answ, "false");
	});
});
describe("getLast(), getFirst(), detSize()", function(){
	it("list: A B C D.  getLast(). Expect: D", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		let str = list.getLast();;
		let answ = "D";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D.  getFirst(). Expect: A", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		let str = list.getFirst();;
		let answ = "A";
		assert.equal(str, answ, "false");
	});
	it("list: A B C D.  getSize(). Expect: 4", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addLast("B");
		list.addLast("C");
		list.addLast("D");
		let str = list.getSize();;
		let answ = 4;
		assert.equal(str, answ, "false");
	});
	it("list: A B.  getSize(). Expect: 2", function(){
		let list = new LinkedList();
		list.addLast("A");
		list.addFirst("B");
		let str = list.getSize();;
		let answ = 2;
		assert.equal(str, answ, "false");
	});
})