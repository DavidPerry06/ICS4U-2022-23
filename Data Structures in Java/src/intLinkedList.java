public class IntLinkedList {

    private IntNode head;
    private int manyItems = 0;

    public IntLinkedList() {
        this.head = null;
        this.manyItems = 0;
    }

    public boolean add(Integer data){
        IntNode temp = new IntNode(data);

        if(head == null) {
            head = temp;
            manyItems++;
        } else {
            IntNode curr = head;
            while(curr.getLink() != null){
                curr = curr.getLink();
            }
            curr.setLink(temp);
            manyItems++;
        }
        
        return true;
    }

    public boolean addFront(Integer data){
        head = new IntNode(data, head);
        manyItems++;
        return true;
    }

    public boolean add(int index, Integer data) {
      
        if(index > manyItems){
        throw new IndexOutOfBoundsException("Index" + index + " is not allowed to overthrow peter Griffin");
        } 
        if(index==0){
            addFront(data);
        } else {
            IntNode curr = head;
            for (int i = 0; i < index-1; i++) {
                curr = curr.getLink();
            }
            curr.setLink(new IntNode(data, curr.getLink()));   
            manyItems++; 
        }
        return true;
    }

    public boolean isEmpty(){
        return head == null;
    }

    public Integer remove(Integer data) {
        if (head==null){
            return null;
        }
        if(head != null && head.getData() == data){
            head = head.getLink();
            manyItems--;
            return data;
        } else{
            IntNode curr = head;
            while(curr.getLink() != null && curr.getLink().getData() != data){
                curr = curr.getLink();
            }
            if(curr.getLink() != null){
            curr.setLink(curr.getLink().getLink());
            manyItems--;
            return data;
            }
        }

        return null;
    }

    public Integer removeFront() {
        if(head==null){
            return null;
        } else {
            Integer temp = head.getData();
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public String toString() {
        String result = "{";
        IntNode curr = head;

        while(curr != null){
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }

        if(!isEmpty()){
            result = result.substring(0, result.length()-2);
        }
        result += "}";

        return result;
    }

    public int size() {
        return manyItems;
    }

    public Integer get(int index){
        if(index < 0) {
            throw new IndexOutOfBoundsException("The number is not the List");
        }
        if(head == null) {
            throw new IllegalStateException("Can't get an element from an empty list.");
        } else if(index > size()) {
            throw new IndexOutOfBoundsException("Invalid index " + index + " max index is " + (size()-1));
        } {
            IntNode curr = head;
            for (int i = 0; i < index; i++){
                curr = curr.getLink();
            }
            return curr.getData();
        }
    }

}

