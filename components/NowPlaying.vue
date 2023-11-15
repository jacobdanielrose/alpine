<template>
    <h2 class="header">
        What I'm listening to:
    </h2>
    <div class="song">
        <div>
            <NuxtImg src="jacob.webp" :placeholder="[50, 25, 75, 5]" height="10" />
        </div>
        <div>
            <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
                <p>title</p>
            </a>
            <p>
                Not Playing
            </p>
            <p>
                artist
            </p>
        </div>
    </div>
</template>

<style scoped lang="ts">
css({
    '.header': {
        text: '2xl',
        fontWeight: 'bold',
        marginBottom: '{space.12}'
    },
    '.song': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
</style>