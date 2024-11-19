try {
    let a = 35;
    console.log(a); // Output: 35
    console.log(b); // This will throw an error because 'b' is not defined earlier.
} catch (error) {
    console.log("Caught error:", error);
} finally {
    console.log("This block always executes.");
}

console.log("I'm fine!");

/*
--------------------------------(1). try{}catch(error){}finally{} --------------------------------------
    try {
        // Code that may throw an error.
    } catch (error) {
        // Code to handle the error.
    } finally {
        // It will always run.
    }
-----------------------------------------------------------------------------
Important Note:---

    ***** In the "try" block, any error thrown is automatically received by the "catch(error)" block, where the 'error' parameter captures and allows us to handle the error.
    
    ***** The "finally" block always runs, whether an error occurs in the "try" block or not.
*/

