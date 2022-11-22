const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <a href="https://github.com/Hacking-NASSA-with-HTML/Array_iteration_cheatsheet"
                target="_blank"><img width="149" height="149"
                src="./../forkme_left_red.png"
                style="position: absolute; top:0; left:0" alt="Fork me on GitHub">
            </a>
            <h1 class="titleH1">forEach Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="forEach Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>[1, 2, 3].forEach(function (item, index) {</code><br>
                <code>    console.log(item, index)</code><br>
                <code>})</code><br>
                <code>// result: 1 0   forEach.js:31</code><br>
                <code>// result: 2 1   forEach.js:31</code><br>
                <code>// result: 3 2   forEach.js:31</code>
            </p>
        </main>`
    return renderMainPageContent
}

[1, 2, 3].forEach(function (item, index) {
    console.log(item, index)
})
