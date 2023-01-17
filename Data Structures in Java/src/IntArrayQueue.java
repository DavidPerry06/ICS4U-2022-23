public class IntArrayQueue {
    private static final int DEFAULT_CAPACITY = 10;

    private Integer[] data;
    private int items = 0;

    public IntArrayQueue(){
        data = new Integer[DEFAULT_CAPACITY];
        items = 0;
    }

    public Integer enqueue(Integer el){
        data[items] = el;
        if(items + 1 == data.length){
            data = exceedsCapacity();
        }
        items++;
        return el;
    }

    public Integer dequeue(){
        if(isEmpty()){
            System.out.println("Nothing is in the queue.");
            return null;
        }
        int val = data[0];
        for(int i=1; i<data.length; i++){
            data[i-1] = data[i];
        }
        items--;
        return val;
    }

    public Integer peek(){
        if(isEmpty()){
            System.out.println("Nothing is in the queue.");
            return null;
        }
        return data[0];
    }

    public void clear(){
        data = new Integer[DEFAULT_CAPACITY];
        items = 0;
    }

    public boolean isEmpty() {
        if(data[0] == null){
            return true;
        }
        return false;
    }

    public Integer[] exceedsCapacity() {
        Integer[] arr = new Integer[data.length * 2];
        for(int i=0; i<data.length; i++){
            arr[i] = data[i];
        }
        return arr;
    }

    public String toString(){
        String result = "{";

        for (int i = 0; i < data.length; i++) {
            result += data[i] + ", ";
        }

        if (!isEmpty()){
            result = result.substring(0, result.length()-2);
        }

        result += "}";

        return result;
    }
}