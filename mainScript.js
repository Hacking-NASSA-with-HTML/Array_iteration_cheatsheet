const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Array iteration cheat sheet</h1>
            <p class="paragraph">
                <a class="link" title="forEach Method" href="./forEach/forEach.html">forEach Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="Map Method" href="./map/map.html">map Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="Filter Method" href="./filter/filter.html">filter Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="Reduce Method" href="./reduce/reduce.html">reduce Method</a>
            </p>
    </main>`
    return renderMainPageContent
}







