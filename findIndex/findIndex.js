const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">FindIndex Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="FindIndex Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]</code><br>
                <code>const foundB_index = objects.findIndex(function (item) {</code><br>
                <code>    return item.id === 'b'</code><br>
                <code>})</code><br>
                <code>const foundD_index = objects.findIndex(function (item) {</code><br>
                <code>    return item.id === 'd'</code><br>
                <code>})</code><br>
                <br>
                <code>console.log(foundB_index)</code><br>
                <code>console.log(foundD_index)</code><br>
                <code>// result: 1   findIndex.js:39</code><br>
                <code>// result: -1   findIndex.js:40</code>
            </p>
        </main>`
    return renderMainPageContent
}

const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const foundB_index = objects.findIndex(function (item) {
    return item.id === 'b'
})
const foundD_index = objects.findIndex(function (item) {
    return item.id === 'd'
})

console.log(foundB_index)
console.log(foundD_index)
