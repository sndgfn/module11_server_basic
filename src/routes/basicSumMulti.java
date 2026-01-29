public class BasicMath {

    // method for addition
    static int sum(int a, int b) {
        return a + b;
    }

    // method for multiplication
    static int multiply(int a, int b) {
        return a * b;
    }

    // method for division
    static double divide(int a, int b) {
        if (b == 0) {
            System.out.println("Cannot divide by zero");
            return 0;
        }
        return (double) a / b;
    }

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        System.out.println("Sum: " + sum(num1, num2));
        System.out.println("Multiplication: " + multiply(num1, num2));
        System.out.println("Division: " + divide(num1, num2));
    }
}
