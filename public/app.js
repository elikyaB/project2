
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
})