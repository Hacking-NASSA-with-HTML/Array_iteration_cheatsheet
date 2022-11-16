const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Map Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="Map Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const array = [1, 2, 3]</code><br>
                <code>const tripled = array.map(function (item) {</code><br>
                <code>    return item * 3</code><br>
                <code>})</code><br>
                <code>console.log(tripled)</code><br>
                <code>// result: (3) [3, 6, 9]   map.js:30</code>
            </p>
        </main>`
    return renderMainPageContent
}

const array = [1, 2, 3]
const tripled = array.map(function (item) {
    return item * 3
})

console.log(tripled)