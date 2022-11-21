const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Includes Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="Includes Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const array = [1, 2, 3]</code><br>
                <code>const isIncludesThree = array.includes(3)</code><br>
                <code>const isIncludesFour = array.includes(4)</code><br>
                <br>
                <code>console.log(isIncludesThree)</code><br>
                <code>console.log(isIncludesFour)</code><br>
                <code>// result: true   includes.js:31</code><br>
                <code>// result: false   includes.js:32</code>
            </p>
        </main>`
    return renderMainPageContent
}

const array = [1, 2, 3]
const isIncludesThree = array.includes(3)
const isIncludesFour = array.includes(4)

console.log(isIncludesThree)
console.log(isIncludesFour)