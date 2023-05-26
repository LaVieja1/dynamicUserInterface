function toggleDropdown(menuId) {
    let dropdown = document.getElementById(menuId);
    let isVisible = dropdown.style.display === 'block';
    let allDropdowns = document.getElementsByClassName('dropdown-content');

    //Hide all dropdowns
    for (let i = 0; i < allDropdowns.length; i++) {
        allDropdowns[i].style.display = 'none';
    }

    dropdown.style.display = isVisible ? 'none' : 'block';
}