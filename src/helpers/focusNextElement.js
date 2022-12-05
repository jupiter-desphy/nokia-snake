export default function focusNextElement() {
  //add all elements we want to include in our selection
    var focusableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
    if (document.activeElement && document.activeElement.form) {
        var focusable = Array.prototype.filter.call(
            document.activeElement.form.querySelectorAll(focusableElements),
            function (element) {
            //check for visibility while always include the current activeElement
            return (
                element.offsetWidth > 0 ||
                element.offsetHeight > 0 ||
                element === document.activeElement
            );
            }
        );
        var index = focusable.indexOf(document.activeElement);
        if (index > -1) {
            var nextElement = focusable[index + 1] || focusable[0];
            nextElement.focus();
        }
    }
}
