// Making a array of countries and print its original order.
let countriesTovisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit)

// Print the Array in alphabetically order without modifying the actual Array list.
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// Show that the array is still in ist original order. 
console.log("Still in original order:", countriesTovisit );

// Print your array in reverse alphabetical order without changing the order of the list.
console.log("Reverse Order:", [...countriesTovisit].reverse());

// Show that your array is still in original order by printing it again.
console.log("Still in its Original Order:", countriesTovisit);

// Reverse the order of your array list. Print the array to show that it's order has been changed.
console.log("Original Array reverse:", countriesTovisit.reverse()); 

// Reverse the order of your list again. Print the list to show its back to its original order.
console.log("Back to Reverse Original Order:", countriesTovisit.reverse());

// Sort your array, so its store in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

// Sort to change your array so it's stored in reverse Alphabetically Order. Print the list to show its order has been changed.
console.log("Orginal Array Reversed:", countriesTovisit.reverse());