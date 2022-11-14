const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">forEach Method</h1>
            <p class="paragraph">See results in the Console</p>
            <p class="paragraph">
                <a class="link" title="forEach Method" href="./../index.html" rel="noreferrer">Back to
                    main page
                </a>
            </p>
    </main>`
    return renderMainPageContent
}