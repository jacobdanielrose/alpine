<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
    path: {
        type: String,
        default: 'articles'
    }
})

const { data: _articles } = await useAsyncData('articles', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())
const articles = computed(() => _articles.value || [])

</script>

<template>
    <main>
        <slot />
        <div class="featured-article">
            <h2>My latest Aritcle</h2>
            <ArticlesListItem :article="articles[0]" />
        </div>
        <div class="now-playing">
            <NowPlaying />
        </div>
    </main>
</template>

<style scoped lang="ts">
css({
    '.featured-article': {
        marginTop: '{space.12}',
        h2: {
            text: '3xl',
            fontWeight: 'bold',
            marginBottom: '{space.4}'
        }
    },
    '.now-playing': {
        marginTop: '{space.12}'
    }
})
</style>