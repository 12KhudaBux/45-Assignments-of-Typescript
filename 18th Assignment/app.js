var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its original order.
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit);
// Print the Array in alphabetically order without modifying the actual Array list.
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in ist original order. 
console.log("Still in original order:", countriesTovisit);
// Print your array in reverse alphabetical order without changing the order of the list.
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
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
