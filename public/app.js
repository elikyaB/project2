
// CAROUSEL
let currentIndex = 0
let highestIndex = $('.carousel-character').children().length - 1

$('.next').on('click', () => {
    const $currentPage = $('.carousel-character').children().eq(currentIndex)
    $currentPage.addClass('hide')
    if (currentIndex < highestIndex) {currentIndex++} 
    else {currentIndex = 0}
    const $nextPage = $('.carousel-character').children().eq(currentIndex)
    $nextPage.removeClass('hide')
    let $url = $nextPage.attr('style')
    $url = $url.slice($url.indexOf('(')+1, $url.indexOf(')'))
    $('#appearance').val($url)
    console.log($('#appearance').val())

})

$('.previous').on('click', () => {
    const $currentPage = $('.carousel-character').children().eq(currentIndex)
    $currentPage.addClass('hide')
    if (currentIndex > 0) {currentIndex--} 
    else {currentIndex = highestIndex}
    const $previousPage = $('.carousel-character').children().eq(currentIndex)
    $previousPage.removeClass('hide')
    let $url = $previousPage.attr('style')
    $url = $url.slice($url.indexOf('(')+1, $url.indexOf(')'))
    $('#appearance').val($url)
    console.log($('#appearance').val())
})

// STATS
const rollNumGen = (n) => {return Math.ceil(Math.random()*n)}

const rollD = (n, dx) => {
    const $die = $(`.${dx}`)
    const roll = rollNumGen(n)
    const showClass = `show-${roll}`
    for (let i=1; i<=n; i++) {
        if ($die.hasClass(`show-${i}`)) {$die.removeClass(`show-${i}`)}
    }
    $die.addClass(showClass)
    return roll
}

const stats = []
$('#statBtn').on("click", () => {
    const results = []
    for (let i = 1; i <= $('.cube').length; i++) {
        results.push(rollD(6, `d${i}`))
    }
    const reducer = (n1, n2) => n1 + n2
    const best3of4 = results.sort().slice(1).reduce(reducer)
    // add way to prevent rerolls later
    $('<div>').addClass('result').text(best3of4).appendTo($('#results'))
    stats.push(best3of4)

    // On final click
    if ($('.result').length == 5) {
        $('#statBtn').off().text('Assign Stats')
        .on('click', () => {
            $('#statBtn').addClass('violet')
            $('.primary-rolls').addClass('hide')
            $('#results').removeClass('hide')
            $('#scores').removeClass('hide') 
        })
    }
})


