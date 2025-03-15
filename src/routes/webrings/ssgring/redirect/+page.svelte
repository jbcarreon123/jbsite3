<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(async () => {
        let params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');
        const way = params.get('way');

        let req = await fetch('/webrings/ssgring/members.json')
        let mems: any[] = await req.json()
        let mem = mems.findIndex((value) => {
            return value.username === slug
        })

        let ret;
        switch (way) {
            case 'prev':
            case 'back':
                ret = mems[mem-1] ?? mems[0]
                location.replace('//' + ret.host)
                break;
            case 'fwrd':
            case 'next':
                ret = mems[mem+1] ?? mems[0]
                location.replace('//' + ret.host)
                break;
            case 'rand':
                let rnd = Math.floor(Math.random()*mems.length)
                ret = mems[rnd]
                location.replace('//' + ret.host)
                break;
            default:
                goto('/webrings/ssgring')
        }
    })
</script>

<h1>Redirecting you to the destination. Please wait.</h1>
<p>Unfortunately, this requires JS.</p>