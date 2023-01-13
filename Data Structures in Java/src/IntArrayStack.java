public class IntArrayStack {
    private int manyItems;
    private Integer top;
    private Integer stack[];
    
    public IntArrayStack(){
        this.top = -1;
        this.stack = new Integer[0];
    }

    public Integer[] push(Integer data){
        int stackSize = stack.length;
        Integer newStack[] = new Integer[stackSize + 1];
        
        for (int i = 0; i < stackSize; i++){
            newStack[i] = stack[i];
        }

        newStack[stackSize] = data;

        top = data;
        manyItems++;
        stack = newStack;

        return newStack;

    }

    public Integer[] pop(){
        if (stack.length != 0){
            int stackSize = stack.length;
            Integer newStack[] = new Integer[stackSize - 1];

            for (int i = 0; i < stackSize-1; i++){
                newStack[i] = stack[i];
            }

            top = newStack[newStack.length - 1];
            manyItems--;
            stack = newStack;

            return newStack;
        }else{
            return null;
        }
    }

    public Integer peek(){
        if (stack.length != 0)
            return stack[0];
        else
            return null;
    }

    public Integer search(Integer data){
        if (stack.length != 0){
            for(int i=top; i>=0; i--) {
                if (stack[i] == data) {
                    return top - i;
                }
            }
            return -1;
        }
        return -1;
       
    }

    public boolean empty(){
        if (stack.length == 0)
            return true;
        else
            return false;
    }

    public String toString(){
        String result = "{";

        for (int i = 0; i < stack.length; i++) {
            result += stack[i] + ", ";
        }

        //getting rid of extra comma and space assuming the list isn't empty
        if (!empty()){
            result = result.substring(0, result.length()-2);
        }

        result += "}";

        return result;
    }

}
