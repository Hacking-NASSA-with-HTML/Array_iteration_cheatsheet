const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Every Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="Every Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const array = [1, 2, 3, -1, 4]</code><br>
                <code>const isAllPositiveNumbers = array.every(function (item) {</code><br>
                <code>    return item > 0</code><br>
                <code>})</code><br>
                <br>
                <code>console.log(isAllPositiveNumbers)</code><br>
                <code>// result: false   every.js:31</code>
            </p>
        </main>`
    return renderMainPageContent
}

const array = [1, 2, 3, -1, 4]
const isAllPositiveNumbers = array.every(function (item) {
    return item > 0
})

console.log(isAllPositiveNumbers)
