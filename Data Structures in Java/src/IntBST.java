public class IntBST {
    private IntBSTNode root;

    public IntBST() {
        this.root = null;
    }

    public IntBSTNode add(Integer val){
        if(root ==null){
            root = new IntBSTNode(val);
        }
        return addRecursive(root, val);
    }

    public IntBSTNode find(Integer val){
        return findRecursive(root, val);
    }

    public void preOrderPrintTraversal(){
        preOrderPrintTraversal(root);
    }

    private void preOrderPrintTraversal (IntBSTNode root){
        System.out.println(root.getValue());
        if(root.hasLeftChild()){
            preOrderPrintTraversal(root.getLeftChild());
        }

        if(root.hasRightChild()){
            preOrderPrintTraversal(root.getRightChild());
        }
    }

    public void postOrderPrintTraversal(IntBSTNode root){
        if(root.hasLeftChild()){
            postOrderPrintTraversal(root.getLeftChild());
        }
        if(root.hasRightChild()){
            postOrderPrintTraversal(root.getRightChild());
        }

        System.out.println(root.getValue());
    }

    public void postOrderPrintTraversal() {
        postOrderPrintTraversal(root);
    }

    public void inOrderPrintTraversal(IntBSTNode root){
        if(root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftChild());
        }

        System.out.println(root.getValue());

        if(root.hasRightChild()){
            inOrderPrintTraversal(root.getRightChild());
        }
    }

    public void inOrderPrintTraversal() {
        inOrderPrintTraversal(root);
    }

    private IntBSTNode findRecursive(IntBSTNode root, Integer val) {
        if(val == root.getValue())
            return root;
        else if (root.hasLeftChild() && val < root.getValue())
            return findRecursive(root.getLeftChild(), val);
        else if (root.hasRightChild() && root.getValue() < val)
            return findRecursive(root.getRightChild(), val);
        else 
        return null;

            
    }

    /**
     * 
     * @param groot root of the subtree we are adding val to
     * @param val the Integer we are adding to the BST (no duplicates)
     * @return a reference to the IntBSTNode we inserted
     */
    private IntBSTNode addRecursive(IntBSTNode root, Integer val) {
        if(val < root.getValue()){
            if(root.hasLeftChild()){
                return addRecursive(root.getLeftChild(), val);
            } else {
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftChild(child);
                return child;
            }
        } else if (val > root.getValue()){
            if(root.hasRightChild()){
                return addRecursive(root.getRightChild(), val);
            } else {
                IntBSTNode child = new IntBSTNode(val);
                root.setRightChild(child);
                return child;
            }
        } else {
            return root;
        }
    }

    private IntBSTNode findLargest(IntBSTNode root){
        if(root.getRightChild() != null && root.getRightChild().getRightChild() !=null){
            return findLargest(root.getRightChild());
        } else if (root.getRightChild() != null) {
            return root.getRightChild();
        }   
        return root;
     }

     public boolean remove(Integer val) {

        if(val == root.getValue())
            if(root.getLeftChild() == null && root.getLeftChild() == null){
                root = null;
                return true;
            } else if (root.getLeftChild() == null) {
                root = root.getRightChild();
                return true;
            } else if (root.getRightChild()==null){
                root = root.getLeftChild();
                return true;
            } else {
                IntBSTNode biggest = findLargest(root.getLeftChild());
                root.setValue(biggest.getValue());
                removeRecursive(root.getLeftChild(), val);
                return true;
            }

            return false;

     }

    private void removeRecursive(IntBSTNode leftChild, Integer val) {
        if(leftChild.getValue() == val && leftChild.getLeftChild() == null){
            leftChild = null;
        } else if (leftChild.getValue() == val && leftChild.getLeftChild() != null){
            leftChild = leftChild.getLeftChild();
        } else if (leftChild.getRightChild().getValue() == val){
            leftChild.setRightChild(null);  
        } else {
            removeRecursive(leftChild.getRightChild(), val);
        }
    }


}