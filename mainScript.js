const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Array iteration cheat sheet</h1>
            <p class="paragraph">
                <a class="link" title="forEach Method" href="./forEach/forEach.html" rel="noreferrer">forEach
                    Method
                </a>
            </p>
    </main>`
    return renderMainPageContent
}







