const rewardIcon = document.querySelector('.reward-icon');
const totalRewards = document.querySelector('.total-rewards');

rewardIcon.addEventListener('click', function() {
    const visibleIcon = document.querySelector('.reward-icon .visible');
    const nonVisibleIcon = document.querySelector('.reward-icon .non-visible');

    if (visibleIcon.style.display === 'block') {
        visibleIcon.style.display = 'none';
        nonVisibleIcon.style.display = 'block';
        totalRewards.innerHTML = '****'; // Display **** when icons are toggled to non-visible
    } else {
        visibleIcon.style.display = 'block';
        nonVisibleIcon.style.display = 'none';
        totalRewards.innerHTML = 'Actual content here'; // Display actual content when icons are toggled to visible
    }
});

