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
            <h1 class="titleH1">Find Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="Find Method" href="./../index.html">Back to main page</a>
            </p>
            <p class="code">
                <code>const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]</code><br>
                <code>const foundB = objects.find(function (item) {</code><br>
                <code>    return item.id === 'b'</code><br>
                <code>})</code><br>
                <code>const foundD = objects.find(function (item) {</code><br>
                <code>    return item.id === 'd'</code><br>
                <code>})</code><br>
                <br>
                <code>console.log(foundB)</code><br>
                <code>console.log(foundD)</code><br>
                <code>// result: {id: 'b'}   find.js:39</code><br>
                <code>// result: undefined   find.js:40</code>
            </p>
        </main>`
    return renderMainPageContent
}

const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const foundB = objects.find(function (item) {
    return item.id === 'b'
})
const foundD = objects.find(function (item) {
    return item.id === 'd'
})

console.log(foundB)
console.log(foundD)
