const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <a href="https://github.com/Hacking-NASSA-with-HTML/Array_iteration_cheatsheet"
                target="_blank"><img width="149" height="149"
                src="./forkme_left_red.png"
                style="position: fixed; top:0; left:0" alt="Fork me on GitHub">
            </a>
            <h1 class="titleH1">Array Iterations Syntax Cheat sheet</h1>
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
            <p class="paragraph">
                <a class="link" title="Some Method" href="./some/some.html">some Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="Every Method" href="./every/every.html">every Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="Find Method" href="./find/find.html">find Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="findIndex Method" href="./findIndex/findIndex.html">findIndex Method</a>
            </p>
            <p class="paragraph">
                <a class="link" title="Includes Method" href="./includes/includes.html">includes Method</a>
            </p>
    </main>`
    return renderMainPageContent
}

