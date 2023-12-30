const header =
document.querySelector('header');
const footer =
document.querySelector('footer');
// header.style.position = 'fixed';
// footer.style.position = 'fixed';
header.style.top = '0'
footer.style.bottom = '0'
function saveSearch(value) {
    document.getElementById('previousSearch')
    .textContent = 'ПрошлыйПоиск' +
    value;
}
function performSearch() {
    alert('Поиск Выполнен');
}
const searchHints = ['Секс',];
const datalist =
document.getElementById('searchHints');
searchHints.forEach(hint => {
    const option =
    document.createElement('option');
    option.value = hint;
    datalist.appendChild(option);
});
const options =
document.querySelectorAll('#searchHinteroption');
options.forEach(option => {
    option.classList.add('custom-width');
})