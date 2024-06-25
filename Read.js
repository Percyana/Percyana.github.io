//javascript toggling  dropdown visibility
const  menuIcon= document.getElementById('menu-icon');
const  dropdownMenu= document.querySelector('.dropdown-menu');
menuIcon.addEventListener('click',function(){
    dropdown.classList.toggle('show');
    });
    //javascript for dropdown menu
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('show');
        });
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                dropdown.classList.remove('show');
                }
                });
                //javascript for search bar
                const searchIcon = document.getElementById('search-icon');
                const searchBar = document.querySelector('.search-bar');
                searchIcon.addEventListener('click', function() {
                    searchBar.classList.toggle('show');
                    });
                    document.addEventListener('click', function(event) {
                        if (!event.target.closest('.search-bar')) {
                            searchBar.classList.remove('show');
                            }
                            });
                            //javascript for cart dropdown
                            const cartIcon = document.getElementById('cart-icon');
                            const cartDropdown = document.querySelector('.cart-dropdown');
                            cartIcon.addEventListener('click', function() {
                                cartDropdown.classList.toggle('show');
                                });
                                document.addEventListener('click', function(event) {
                                    if (!event.target.closest('.cart-dropdown')) {
                                        cartDropdown.classList.remove('show');
                                        }
                                        });
                                        //javascript for responsive navigation
                                        const navToggle = document.getElementById('nav-toggle');
                                        const navMenu = document.querySelector('.nav-menu');
                                        navToggle.addEventListener('click', function() {
                                            navMenu.classList.toggle('show');
                                            });
                                            document.addEventListener('click', function(event) {
                                                if (!event.target.closest('.nav-menu')) {
                                                    navMenu.classList.remove('show');
                                                    }
                                                    });

