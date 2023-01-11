public class Test {
    public static void main(String[] args) {
        //testAddNodes();
        //testRemoveNodes();
        //testLLStack();
        //testIntArrayStack()
    }

    

    private static void testLLStack() {
        IntLLStack stack = new IntLLStack();
        System.out.println(stack.isEmpty());
        Integer temp = stack.pop();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        System.out.println(stack);
        
        temp = stack.pop();
        System.out.println(temp);
        System.out.println(stack);

        stack.peek();

        System.out.println(stack.isEmpty());

        System.out.println(stack.search(3));
        
    }



    private static void testAddNodes() {
        intLinkedList list = new intLinkedList();
        
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);

        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

        list.add(1,6);
        System.out.println(list);

        list.add(0,7);
        System.out.println(list);

        list.add(list.size(),8);
        System.out.println(list);
    }

    private static void testRemoveNodes() {
        intLinkedList list = new intLinkedList();
        Integer temp = list.remove(6);
        System.out.println(temp);
        System.out.println(list);

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        temp = list.remove(3);
        System.out.println(temp);
        System.out.println(list);
        temp = list.remove(1);
        System.out.println(temp);
        temp = list.remove(5);
        System.out.println(temp);
        System.out.println(list);

        temp = list.remove(23);
        System.out.println(temp);
        System.out.println(list);

        list = new intLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        temp = list.removeFront();
        System.out.println(temp);
        System.out.println(list);
        System.out.println(list.size());
    }

    private static void testIntArrayStack(){ 
        IntArrayStack arr = new IntArrayStack();
        arr.pop();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        System.out.println(arr);
        System.out.println(arr.search(3));
        arr.pop();
        System.out.println(arr);
        System.out.println(arr.empty());
        System.out.println(arr.peek()); 
    }

}
