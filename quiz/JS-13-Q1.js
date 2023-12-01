//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function outSide() {
    const first = ["action", "Potential", "Signals"];
    console.log(first[0]);

    function inside() {
        const second = first[1]
        console.log(second);

        function final() {
            console.log(first[2]);
        }
        final()
    }
    inside();
}
outSide();