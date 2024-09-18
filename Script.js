<script>
    // Custom JavaScript to enhance button behavior
    document.getElementById('navbarTogglerButton').addEventListener('click', function() {
        const navbarNav = document.getElementById('navbarNav');
        if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
        } else {
            navbarNav.classList.add('show');
        }
    });
</script>