const letters = {

    inspiration: {

        title: "A Little Reminder",

        text: `

            <p>Dear Sumit,</p>

            <p>
                I hope you always know what a good friend you are.
                I'm really glad that I got to know you and that we became friends.
            </p>

            <p>
                One thing I really like about you is how you always smile.
                You have this way of making things feel a little lighter
                just by being around. You're also really good at making
                people laugh, and I honestly love that about you.
            </p>

            <p>
                You're someone who cares about the people around you,
                and I hope you know that it doesn't go unnoticed.
                You might not always realize it, but the way you treat
                people and make them feel comfortable means a lot.
            </p>

            <p>
                I'm really happy to have you as a friend, Sumit.
                I hope we get to make a lot more memories, laugh about
                stupid things, and just enjoy our time together.
            </p>

            <p>
                So yeah, just a little reminder that you're a really good
                person and a really good friend. Keep that smile, okay hehe.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    },


    kindness: {

        title: "Little Things I Like",

        text: `

            <p>Dear Sumit,</p>

            <p>
                There are quite a few things I like about you.
                For starters, you're always smiling, and somehow you manage
                to make the people around you smile too. I don't know how
                you do it, but you really have that kind of energy haha.
            </p>

            <p>
                You're also seriously good at basketball. Watching you play,
                you can tell that you really know what you're doing.
                I honestly think it's pretty cool seeing you play.
            </p>

            <p>
                But more than that, I really like how you care about the
                people around you. You're the kind of person who notices
                others and genuinely wants them to be okay, and I really
                respect that about you.
            </p>

            <p>
                I also like how easy it is to laugh around you. You can turn
                random little moments into something funny, and those are
                the kinds of moments that make friendships fun.
            </p>

            <p>
                So yeah, you're a great basketball player, you're always
                smiling, you're funny, and most importantly, you're someone
                who genuinely cares about others.
            </p>

            <p>
                I'm really glad you're my friend hehe.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    },


    faith: {

        title: "Keep Your Heart Good",

        text: `

            <p>Dear Sumit,</p>

            <p>
                I hope you always remember that being a good person matters,
                even when you don't always see the impact you have on others.
            </p>

            <p>
                Sometimes the little things we do for people can mean much
                more than we realize. A smile, making someone laugh,
                checking on someone, or simply being there when someone
                needs a friend can make someone's day a little better.
                And I think that's something you already do naturally.
            </p>

            <p>
                I pray that God continues to guide you through every part
                of your life and helps you keep the good heart that you have.
                When life gets difficult or things don't go the way you hoped,
                I hope you continue to trust Him and remember that you don't
                have to figure everything out alone.
            </p>

            <p>
                I pray that God gives you wisdom for your future, strength
                when you need it, and peace when things feel uncertain.
                I hope He surrounds you with good people, opens the right
                doors for you, and helps you become the person He created
                you to be.
            </p>

            <p>
                And Sumit, no matter where life takes you, I hope you never
                lose your kindness, your smile, or that ability you have
                to make people laugh.
            </p>

            <p>
                Keep being a good friend, keep caring for the people around
                you, and keep trusting God.
            </p>

            <p>
                I'm really grateful that I got to know you.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    }

};



const mailbox =
    document.getElementById("mailbox");

const lettersArea =
    document.getElementById("lettersArea");

const instruction =
    document.getElementById("instruction");

const overlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const letterHeading =
    document.getElementById("letterHeading");

const letterBody =
    document.getElementById("letterBody");

const envelopes =
    document.querySelectorAll(".envelope");



let mailboxOpened = false;

let selectedLetter = false;



mailbox.addEventListener("click", () => {

    if (mailboxOpened) {

        return;

    }

    mailboxOpened = true;

    mailbox.classList.add("open");

    mailbox.classList.add("shake");

    setTimeout(() => {

        mailbox.classList.remove("shake");

    }, 700);



    instruction.innerHTML =
        "There are three letters inside.<br><strong>You can only choose one.</strong>";



    setTimeout(() => {

        lettersArea.classList.add("visible");



        envelopes.forEach((envelope, index) => {

            setTimeout(() => {

                envelope.classList.add("pop");

            }, index * 130);

        });

    }, 550);

});



envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        if (selectedLetter) {

            return;

        }

        selectedLetter = true;



        const key =
            envelope.dataset.letter;

        const letter =
            letters[key];



        if (!letter) {

            return;

        }



        letterHeading.textContent =
            letter.title;

        letterBody.innerHTML =
            letter.text;



        envelope.classList.add("selected");



        envelopes.forEach(other => {

            if (other !== envelope) {

                other.classList.add("locked");

            }

        });



        setTimeout(() => {

            overlay.classList.add("open");

        }, 200);

    });

});



closeLetter.addEventListener("click", () => {

    overlay.classList.remove("open");

});



overlay.addEventListener("click", event => {

    if (event.target === overlay) {

        overlay.classList.remove("open");

    }

});



document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        overlay.classList.remove("open");

    }

});



function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";



    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top =
        "-20px";



    const colors = [

        "#f4b8c6",

        "#efabc0",

        "#f6cbd5",

        "#f8d9e0",

        "#e8a7b8"

    ];



    petal.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];



    petal.style.animationDuration =
        (4 + Math.random() * 3) + "s";



    document.body.appendChild(petal);



    requestAnimationFrame(() => {

        petal.classList.add("active");

    });



    setTimeout(() => {

        petal.remove();

    }, 7500);

}



setInterval(() => {

    if (
        document.visibilityState === "visible"
    ) {

        createPetal();

    }

}, 2600);



setInterval(() => {

    if (
        !mailboxOpened &&
        document.visibilityState === "visible"
    ) {

        mailbox.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                },

                {

                    transform:
                        "translateY(-4px) rotate(-1deg)"

                },

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                }

            ],

            {

                duration: 900,

                easing: "ease-in-out"

            }

        );

    }

}, 6000);
