const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Reduce Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="Reduce Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const array = [1, 2, 3]</code><br>
                <code>const sum = array.reduce(function (result, item) {</code><br>
                <code>// or const sum = array.reduce((result, item) => {</code><br>
                <code>    return result + item</code><br>
                <code>}, 0)</code><br>
                <code>console.log(sum)</code><br>
                <code>// result: 6   reduce.js:31</code>
            </p>
        </main>`
    return renderMainPageContent
}

const array = [1, 2, 3]
const sum = array.reduce((result, item) => {
    return result + item
}, 0)

console.log(sum)