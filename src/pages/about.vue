<template>
    <div class="max-width flex row margin-top scroll-y">
        <h2>About MangaBox</h2>

        <p class="margin-top">
            This site was originally a custom manga-reader that had the ability to track progress (down to the page number) and sync across multiple devices. <br>
            It was originally just a personal project to learn nuxt and vue, but I decided to make it public. <br>
            I have since removed the reader portion of it because I received a DMCA request from comeso GmbH (they're ruining fan translations and the manga community in general). <br>
            So now it's just for reverse image searching manga pages.
        </p>

        <h2 class="margin-top">How does the Reverse Image Search work?</h2>

        <p class="margin-top">
            Well, I'm glad you asked. <br>
            It uses a combination of various APIs to search a few different sources for the best coverage. <br>
            The sources are: <br>
        </p>
        <ul class="margin-top">
            <li><b>MangaBox-Match</b> - A custom reverse image search database for mangadex</li>
            <li><b>Google Vision Api</b> - Google's reverse image search Api (you can find it <a href="https://cloud.google.com/vision/docs/apis">here</a>)</li>
            <li><b>SauceNAO Api</b> - Another reverse image search database (you can find it <a href="https://saucenao.com" target="_blank">here</a>)</li>
        </ul>
        <p class="margin-top">
            I use multiple sources because each one has its own strengths and weaknesses. <br>
            MangaBox-Match is geared towards searching MangaDex specific content and is incredibly accurate for standard manga (fuck long-strip) uploaded after Dec 2022. <br>
            Google Vision and SauceNAO don't scan MangaDex because of it's nature as a SPA (also using nuxt) but are useful for a last-ditch attempt to find a match. <br>
            I'm aware SauceNAO claims to scan MangaDex but it is VERY far behind MangaBox-Match, I've also reached out to the author to collab on making it better but was ignored so ¯\_(ツ)_/¯
        </p>

        <h2 class="margin-top">Limitations / Known Issues</h2>
        <ul class="margin-top">
            <li>
                <b>Cropped Content</b> - MangaBox-Match isn't designed around searching for cropped images so it's very bad at finding long-strip content
            </li><p class="mute" style="font-size: .8rem">I am working on a revised algorithm that can scan partial images but it's being a bit of a pain so bare with me.</p>
            <li>
                <b>Old MD Content</b> - I started scraping MangaDex for image signatures in December of 2022, so anything uploaded before that hasn't been indexed.
                <p class="mute" style="font-size: .8rem">I do plan on eventually doing a bulk load of everything before that, but there are various things I need to take into consideration (like ratelimits and DB size)</p>
            </li>
            <li><b>English Only</b> - I only load English copies of manga, this is to keep the volume of data down and to not exceed MD's ratelimits.</li>
            <li>
                <b>Recently Uploaded Non-MD Content</b> - Since MB-M only indexes MangaDex and google's crawlers take a while to index other sites, new uploads for other sites take a few days to show up
                <p class="mute" style="font-size: .8rem">I scan and index content from MangaDex within 30 seconds of the manga being uploaded</p>
            </li>
        </ul>

        <h2 class="margin-top">Discord Bot</h2>
        <p class="margin-top">
            There is a discord bot that can perform these searches directly in your favourite server! <br>
            You can react to the image with 🍝, 🔍 or 🔎 and it will find an image the source for the page! <br>
            You can also use the slash command <code>/manga-image-lookup url:https://your-porn-manga.com/yuri-is-best</code> and it will perform the same search <br>
            There are plans to move it to a stand alone bot as currently it's baked in with a bot that has a bunch of other features... but for now... <br>
            You can install it by going <a href="https://discord.com/api/oauth2/authorize?client_id=905632533981577247&permissions=8&scope=bot%20applications.commands" target="_blank">here</a> and following the discord prompt.
        </p>

        <h2 class="margin-top">Questions?</h2>
        <p class="margin-top">
            If you have any questions, feel free to join <a href="https://discord.gg/RV9MvvYXsp" target="_blank">my discord server</a> or find me in the MangaDex one (I'm <a href="https://discord.com/users/191100926486904833" target="_blank">Cardboard</a>). <br>
            Almost everything about this project is open-source.
            You can find the code of this site <a href="https://github.com/cardboards-box/manga-reverse-img-search" target="_blank">here</a>
            and the code for the API that powers all of this <a href="https://github.com/calico-crusade/cardboardbox-anime" target="_blank">here</a>. <br> <br>

            If you want to check out some of my other projects, you can take a look at my <a href="https://www.nuget.org/profiles/Cardboard" target="_blank">NuGet packages</a>
            or <a href="https://github.com/calico-crusade" target="_blank">GitHub profile</a>.
        </p>
    </div>
</template>

<style lang="scss" scoped>
a {
    text-decoration: underline;
}

.max-width {
    padding-bottom: 5rem;
}
</style>
