public class Test {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if (!testAddNodes()){
            System.out.println("Test Failed: testAddNodes");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testRemoveNodes()){
            System.out.println("Test Failed: testRemoveNodes");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testIntArrayQueue()){
            System.out.println("Test Failed: testRemoveNodes");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testLLQueue()){
            System.out.println("Test Failed: testRemoveNodes");
            testFailed++;
        } else {
            testPassed++;
        }

        if (!testLLStack()){
            System.out.println("Test Failed: testLLStack");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testIntArrayStack()){
            System.out.println("Test Failed: testIntArrayStack");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testGetNodes()){
            System.out.println("Test Failed: testGetNodes");
            testFailed++;
        } else {
            testPassed++;
        }
    }

    
    private static IntLLQueue prepareLLQueue(){
        IntLLQueue queue = new IntLLQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        return queue;
    }

    private static boolean testLLQueue() {
        IntLLQueue queue = prepareLLQueue();
        if(queue.get(0)!=1)
            return false;
        if(queue.get(4)!=5)
            return false;
        if(queue.get(2)!=3)
            return false;

        queue.dequeue();
        if(queue.get(0)!=2)
            return false;
        queue.dequeue();
        if(queue.get(0)!=3)
            return false;

        if(queue.peek()!=3)
            return false;

        queue.clear();
        if(!queue.isEmpty())
            return false;

        return true;
    }

    

    private static boolean testLLStack() {
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

        return true;
        
    }

    private static boolean testIntArrayQueue(){ //tested
        IntArrayQueue arr = new IntArrayQueue();

        Integer temp = arr.enqueue(1);
        if(temp != 1)
            return false;

        temp = arr.enqueue(2);
        if(temp != 2)
            return false;

        temp = arr.enqueue(3);
        if(temp != 3)
            return false;

        if(arr.peek() != 1)
            return false;

        if(arr.dequeue() != 1)
            return false;

        if(arr.peek() != 2)
            return false;

        if(arr.isEmpty() != false)
            return false;

        arr.clear();

        if(arr.isEmpty() != true)
            return false;

        return true;

    }



    private static boolean testAddNodes() {
        IntLinkedList list = prepareLinkedList();

        list.add(6);

        if(list.get(5) != 6 || list.size() !=6){
            return false;
        }

        list.addFront(4);
        list.addFront(5);
        if(list.get(0) != 5 || list.get(1) != 4|| list.size() !=8){
            return false;
        }

        list.add(1,6);
        if(list.get(0) != 5 || list.get(1) != 6|| list.size() !=9){
            return false;
        }
            

        list.add(0,7);
        if(list.get(0) != 7 || list.get(1) != 5|| list.size() !=10){
            return false;
        }
            

        list.add(list.size(),8);
        if(list.get(list.size()-1) != 8 || list.size() != 11){
            return false;
        }

        return true;
    }
            
    


    private static IntLinkedList prepareLinkedList() {
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        return list;
    }

    public static boolean testGetNodes(){
        IntLinkedList list = prepareLinkedList();

        Integer i = list.get(0);
        if(i != 1)
            return false;
        i = list.get(list.size()-1);
        if (i!=5)
        return false;

        i = list.get(2);
        if (i!=3)
            return false;

        try {
            i = list.get(20);
            return false;
        } catch (IndexOutOfBoundsException ex){

        }
        return true;
    }

    private static boolean testRemoveNodes() {
        IntLinkedList list = new IntLinkedList();
        Integer temp = list.remove(6);
        if(temp != null){
            return false;
        }

        list = prepareLinkedList();

        if(list.size() != 5 || list.get(0) != 1 || list.get(list.size()-1) !=5){
            return false;
        }

        temp = list.remove(3);
        if(temp != 3 || list.size() !=4){
            return false;
        }
        temp = list.remove(1);
        if(temp != 1 || list.size() !=3){
            return false;
        }
        temp = list.remove(5);
        if(temp != 5 || list.size() !=2){
            return false;
        }

        temp = list.remove(23);
        if(temp != null || list.size() !=2){
            return false;
        }

        list = prepareLinkedList();
        temp = list.removeFront();
        if(temp != 1 || list.size() !=4){
            return false;
        }
        
        return true;
    }

    private static boolean testIntArrayStack(){ 
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
        
        return true;
    }

}
