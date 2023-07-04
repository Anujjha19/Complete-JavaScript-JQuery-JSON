// CallBack in Asynchronous Programming  | Callback-hell | Pyramid-of-DOM


/* // Manually becoming very complicated to do one-by-one

const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
setTimeout(() => {
    head1.textContent = "Heading 1";
    head1.style.color = "red";
}, 2000);
setTimeout(() => {
    head2.textContent = "Heading 2";
    head2.style.color = "yellow";
}, 2000);
*/


const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

setTimeout(() => {
    heading1.textContent = "Heading 1";
    heading1.style.color = "red";
    setTimeout(() => {
        heading2.textContent = "Heading 2";
        heading2.style.color = "blue";
        setTimeout(() => {
            heading3.textContent = "Heading 3";
            heading3.style.color = "red";
            setTimeout(() => {
                heading4.textContent = "Heading 4";
                heading4.style.color = "blue";
                setTimeout(() => {
                    heading5.textContent = "Heading 5";
                    heading5.style.color = "red";
                    setTimeout(() => {
                        heading6.textContent = "Heading 6";
                        heading6.style.color = "blue";
                        setTimeout(() => {
                            heading7.textContent = "Heading 7";
                            heading7.style.color = "red";
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
}, 1000);



console.log("Pyramid of dooooooooom!");

step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                step5(function (value5) {
                    step6(function (value6) {
                        step7(function (value7) {
                            // Do something with value 4
                            console.log(value7);
                        });
                    });
                });
            });
        });
    });
});