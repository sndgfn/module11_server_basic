// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {

//         Scanner sc = new Scanner(System.in);

//         System.out.print("Enter first number: ");
//         int a = sc.nextInt();

//         System.out.print("Enter second number: ");
//         int b = sc.nextInt();

//         int sum = a + b;

//         System.out.println("Sum = " + sum);

//         sc.close();
//     }
// }

import java.util.Scanner;

public class Main {

    // BIG FUNCTION
    public static String bigFunction() {

        Scanner sc = new Scanner(System.in);

        // Take inputs
        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter first number: ");
        int a = sc.nextInt();

        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        // Calculations
        int sum = a + b;
        int sub = a - b;
        int mul = a * b;
        double div = b != 0 ? (double) a / b : 0;

        // Decision making
        String bigger;
        if (a > b) {
            bigger = "First number is bigger";
        } else if (a < b) {
            bigger = "Second number is bigger";
        } else {
            bigger = "Both numbers are equal";
        }

        // Final output string (RETURN)
        return "Hello " + name +
                "\nSum: " + sum +
                "\nSubtraction: " + sub +
                "\nMultiplication: " + mul +
                "\nDivision: " + div +
                "\nResult: " + bigger;
    }

    public static void main(String[] args) {
        // Call the big function
        String result = bigFunction();
        System.out.println(result);
    }
}
