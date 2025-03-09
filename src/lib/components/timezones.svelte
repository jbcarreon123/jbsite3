<script>
	import { onMount, onDestroy } from 'svelte';

	let currentDate;
	let currentTime;
	let timezone = 'Asia/Manila';
	function updateDateTime() {
		const now = new Date();

		currentDate = now.toLocaleDateString('en-US', {
			timeZone: timezone,
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});

		currentTime = now.toLocaleTimeString('en-US', {
			timeZone: timezone,
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: true
		});
	}

  let localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let targetTimezone = 'Asia/Manila';

  let timeDifference = '';

  $: {
    if (localTimezone && targetTimezone) {
      const startTime = performance.now(); 

      const now = new Date();
      const localOffset = now.getTimezoneOffset();
      const localDate = new Date(now.getTime() + (localOffset * 60 * 1000));
      const targetDate = new Date(localDate.toLocaleString("en-US", { timeZone: targetTimezone }));

      const diffInMilliseconds = targetDate.getTime() - localDate.getTime();
      const diffInMinutes = Math.round(diffInMilliseconds / (60 * 1000));

      const hours = Math.floor(Math.abs(diffInMinutes) / 60);
      const minutes = Math.abs(diffInMinutes) % 60;

      const sign = diffInMinutes > 0 ? 'ahead' : 'behind';
      const min = minutes > 0 ? `${minutes.toString().padStart(2, '0')}s` : ''
      const tmz = localTimezone == targetTimezone ? 'timezone' : 'offset'
      timeDifference = hours > 0 || minutes > 0 ?`I'm ${hours.toString().padStart(2, '0')}h${min} ${sign}!` : `Hmm... We have the same ${tmz}...`;


      const endTime = performance.now(); 
      const duration = endTime - startTime;
      console.log(`Timezone calculation took ${duration} milliseconds`); 
    }
  }

	onMount(() => {
		updateDateTime();
		const intervalId = setInterval(updateDateTime, 1000);

		onDestroy(() => {
			clearInterval(intervalId);
		});
	});
</script>

<div class="flex justify-center w-full items-center flex-col">
  <h1 class="headercolor text-center">{currentTime}</h1>
  <p>{currentDate}</p>
  <p class="text-[11px] text-ctp-text dark:text-ctp-text text-center">in {timezone}.<br />{timeDifference}</p>
</div>
