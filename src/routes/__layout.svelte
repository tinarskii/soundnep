<script lang="ts">
  import { darkTheme } from '$lib/store';
  import Kofi from '$lib/components/Kofi.svelte';
  import SocialButtons from '$lib/components/SocialButtons.svelte';
  import '../tailwind.css';
  import '../index.css';
  import { goto } from '$app/navigation';
</script>

<div class={$darkTheme ? 'dark' : ''}>
  <button class="absolute left-2 top-2 text-lg" on:click={() => ($darkTheme = !$darkTheme)}>
    {$darkTheme ? '🌙' : '🌞'}
  </button>
  <button class="absolute right-2 top-2 text-lg dark:text-white text-black" on:click={() => goto("https://github.com/tinarskii/soundnep#contributing")}>
    Add sound
  </button>

  <slot />
  <Kofi name={'tinarskii'} />
  <SocialButtons />
</div>
