
const selectRating = (rating) => {
    localStorage.setItem('selectedRating', rating);
}

const submitRating = () => {
    document.getElementById('selectedRating').innerHTML = localStorage.getItem('selectedRating');
    document.getElementById('frontCard').classList.add("hide")
    document.getElementById('backCard').classList.remove("hide")
}

