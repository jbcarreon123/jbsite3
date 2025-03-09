import { fromZonedTime, toZonedTime } from 'date-fns-tz';

export let changelogs = [
    {
        date: fromZonedTime(new Date("03/09/2025 21:19"), 'Asia/Manila'),
        content: "New implementation of the hover tooltip! Now it follows your cursor! Also more site buttons on /links, and added Apartment Webring"
    },
    {
        date: fromZonedTime(new Date("03/08/2025 17:13"), 'Asia/Manila'),
        content: "New buttons and new button hover thing!"
    },
    {
        date: fromZonedTime(new Date("03/07/2025 14:37"), 'Asia/Manila'),
        content: "Made an image viewer for the blog post images!"
    },
    {
        date: fromZonedTime(new Date("03/06/2025 09:04"), 'Asia/Manila'),
        content: "Switched Personalize from using cookies to using localStorage. It should now not reset your config options. Note that personalize configs stored in cookies will be lost and you need to set your config again."
    },
    {
        date: fromZonedTime(new Date("03/05/2025 18:08"), 'Asia/Manila'),
        content: "Now my site probably is now fully compatible with screen readers, and also hotfixed the FCWL widget to add alt text because Wave (WCAG accessibility tool) wouldn't stop complaining"
    },
    {
        date: fromZonedTime(new Date("03/05/2025 14:45"), 'Asia/Manila'),
        content: "2 new themes (Gruvbox and High Contrast), and blog page is now optimized for screen reader usage! Also the animated background now respects reduced motion mode!"
    },
    {
        date: fromZonedTime(new Date("03/04/2025 16:48"), 'Asia/Manila'),
        content: "Added a theme selector with 4 themes to choose for!"
    },
    {
        date: fromZonedTime(new Date("03/04/2025 10:42"), 'Asia/Manila'),
        content: "Changed font to monospace, and other stuff"
    },
    {
        date: fromZonedTime(new Date("03/04/2025 01:12"), 'Asia/Manila'),
        content: "Put the webrings, other people's sites, and some link related stuff over to /links"
    },
    {
        date: fromZonedTime(new Date("03/03/2025 12:08"), 'Asia/Manila'),
        content: "Implemented Ayano's comment widget, replacing HCB"
    },
    {
        date: fromZonedTime(new Date("03/03/2025 10:06"), 'Asia/Manila'),
        content: "Implemented HTML Comment Box for my posts, we'll see if that will stick or I'm going to implement another solution"
    },
    {
        date: fromZonedTime(new Date("03/03/2025 09:16"), 'Asia/Manila'),
        content: "Managed to fix the background overflowing so much and also made it so if this site is viewed on mobile it works well, also 'uploaded' on updated date lol, fixed that"
    },
    {
        date: fromZonedTime(new Date("03/02/2025 22:00"), 'Asia/Manila'),
        content: "Modified the link colors for better accessibility, added 'Disable animated BG', created marquees and much more!"
    },
    {
        date: fromZonedTime(new Date("03/01/2025 22:48"), 'Asia/Manila'),
        content: "Found a bug on my Auto TOC regarding on posts linking another post, now fixed"
    },
    {
        date: fromZonedTime(new Date("03/01/2025 21:48"), 'Asia/Manila'),
        content: "Added shiki on my post's codeblocks!"
    },
    {
        date: fromZonedTime(new Date("03/01/2025 09:23"), 'Asia/Manila'),
        content: "music-ring just don't work (fixed it), also more site buttons for you to explore!"
    },
    {
        date: fromZonedTime(new Date("03/01/2025 08:05"), 'Asia/Manila'),
        content: "New webring: Music-ring! Now added the widget on the sidebar!"
    },
    {
        date: fromZonedTime(new Date("02/28/2025 23:06"), 'Asia/Manila'),
        content: "New webring: FCWL! Now added the widget on the sidebar!"
    },
    {
        date: fromZonedTime(new Date("02/28/2025 22:20"), 'Asia/Manila'),
        content: "Added a new set of other site's buttons for you to discover!"
    },
    {
        date: fromZonedTime(new Date("02/28/2025 22:10"), 'Asia/Manila'),
        content: "New homepage layout! Enjoy!"
    },
    {
        date: fromZonedTime(new Date("02/28/2025 21:25"), 'Asia/Manila'),
        content: "Added captions to the images on the posts so you can have captions!"
    },
    {
        date: fromZonedTime(new Date("02/28/2025 21:00"), 'Asia/Manila'),
        content: "Changed 'Blogs' to 'Posts' because it can now contain other stuff than blogs. It will be still called 'blogs' in the backend because of how much things it can break if not."
    },
    {
        date: fromZonedTime(new Date("02/28/2025 19:30"), 'Asia/Manila'),
        content: "Changelogs has born into jb's site. Also rolled back the replacement from <p> to <div> because I'm a developer, not a develodiver."
    },
]

export let todos = [
    "Join a couple more webrings, like apartment webring, nekowebring, musicring",
    "Create my own webring",
    "Actually finish the site (impossible!)"
]

export let miniRambles = [
    {
        title: "the start of jb's mini-rambles",
        content: "As a follower, you get jb's mini rambles, straight to your Nekoweb feed! Added a new rss file called nekoweb-feed.xml so peeps using my rss feed won't complain. You can put nekoweb-feed.xml on your rss feed viewer if you wanna get mini-rambles on your daily dose of jbcarreon123.",
        date: fromZonedTime(new Date("03/07/2025 12:03"), 'Asia/Manila'),
    },
    {
        title: "dual booted linux, also it's 2am",
        date: fromZonedTime(new Date("03/08/2025 02:11"), 'Asia/Manila'),
        content: "So I dual booted my laptop with Windows 11 and EndeavourOS, let's see if that will stick or I am going to distro hop."
    },
]