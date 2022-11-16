const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Filter Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="Filter Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const ints = [1, 2, 3, 4, 5, 6]</code><br>
                <code>const even = ints.filter(function (item) {</code><br>
                <code>    return item % 2 === 0</code><br>
                <code>})</code><br>
                <code>console.log(even)</code><br>
                <code>// result: (3) [2, 4, 6]</code>
            </p>
        </main>`
    return renderMainPageContent
}

const ints = [1, 2, 3, 4, 5, 6]
const even = ints.filter(function (item) {
    return item % 2 === 0
})

console.log(even)