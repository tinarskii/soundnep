<script>
  import { Facebook, Twitter } from 'svelte-share-buttons-component';
  const url = 'https://soundnep.tin-sci.me/';
  const title = 'It\'s a soundboard... with neps';
</script>

<div class="absolute bottom-0 right-0 p-3 flex flex-row gap-2">
  <Facebook quote="{title}" {url} class='w-10 h-10 rounded-full' />
  <Twitter text="{title}" {url} hashtags="svelte" via="tin_sci" class='w-10 h-10 rounded-full' />
</div>
